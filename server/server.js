const mongoose = require('mongoose')
const Message = require('./models/Message')
const MessageTuev = require('./models/MessageTuev')
const express = require('express')
const withAuth = require('./middleware')
mongoose.connect('mongodb://localhost:27017/capstone-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

const registrationRoutes = require('./route')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log(`Express ready on port ${PORT}`))

app.use(cookieParser())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/registration', registrationRoutes)

app.get('/checkToken', withAuth, function(req, res) {
  res.sendStatus(200)
})

app.get('/logout', function(req, res) {
  res.clearCookie('token').sendStatus(200)
})
/* Server Funktion, die ich später noch brauchen werde.
app.get('/all', async (req, res) => {
  const messages = await Message.find()
  const messages2 = await MessageTuev.find()
  res.json({ messages, messages2 })
}) */

/* app.get('/messages', withAuth, (req, res) => {
  Message.find()
    .then(messages => res.json(messages))
    .catch(err => res.json(err))
}) */
app.use(require('./message'))
app.get('/messages/:id', (req, res) => {
  Message.findById(req.params.id)
    .then(message => res.json(message))
    .catch(err => res.json(err))
})

app.post('/messages', (req, res) => {
  Message.create(req.body)
    .then(message => res.json(message))
    .catch(err => res.json(err))
})

app.get('/messagesTuev', (req, res) => {
  MessageTuev.find()
    .then(messages => res.json(messages))
    .catch(err => res.json(err))
})
app.post('/messagesTuev', (req, res) => {
  MessageTuev.create(req.body)
    .then(message => res.json(message))
    .catch(err => res.json(err))
})

app.patch('/messages/:id', (req, res) => {
  Message.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(message => res.json(message))
    .catch(err => res.json(err))
})

app.delete('/messages/:id', (req, res) => {
  Message.findByIdAndDelete(req.params.id)
    .then(message => res.json(message))
    .catch(err => res.json(err))
})
app.delete('/messagestuev/:id', (req, res) => {
  MessageTuev.findByIdAndDelete(req.params.id)
    .then(message => res.json(message))
    .catch(err => res.json(err))
})

const path = require('path')
const logger = require('morgan')

/** Seting up server to accept cross-origin browser requests */
app.use(function(req, res, next) {
  //allow cross origin requests
  res.setHeader(
    'Access-Control-Allow-Methods',
    'POST, PUT, OPTIONS, DELETE, GET'
  )
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header('Access-Control-Allow-Credentials', true)
  next()
})

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')))
app.use(logger('dev'))
// Put all API endpoints under '/api'
/* app.use(require('./file')) */

const multer = require('multer')
const { /* mongo, */ connection } = require('mongoose')
var Grid = require('gridfs-stream')
Grid.mongo = mongoose.mongo

var conn = mongoose.createConnection()
conn.once('open', function() {
  var gfs = Grid(conn.db)
  // all set!

  const storage = require('multer-gridfs-storage')({
    db: connection.db,
    file: (req, file) => {
      return {
        filename: file.originalname,
      }
    },
  })
  // sets file input to single file
  const singleUpload = multer({ storage: storage }).single('file')

  app.get('/files/:filename', (req, res) => {
    gfs.files.find({ filename: req.params.filename }).toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404).json({
          message: 'Could not find file',
        })
      }

      var readstream = gfs.createReadStream({
        filename: files[0].filename,
      })
      res.set('Content-Type', files[0].contentType)
      return readstream.pipe(res)
    })
  })

  app.get('/files', (req, res) => {
    gfs.files.find().toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404).json({
          message: 'Could not find files',
        })
      }
      return res.json(files)
    })
  })

  app.post('/files', singleUpload, (req, res) => {
    if (req.file) {
      return res.json({
        success: true,
        file: req.file,
      })
    }
    res.send({ success: false })
  })

  app.delete('/files/:id', (req, res) => {
    gfs.remove({ _id: req.params.id }, err => {
      if (err) return res.status(500).json({ success: false })
      return res.json({ success: true })
    })
  })
})
