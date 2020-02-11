const mongoose = require('mongoose')
const Message = require('./models/Message')
const MessageTuev = require('./models/MessageTuev')
const express = require('express')
const withAuth = require('./middleware')
const path = require('path')

const {
  MONGODB_URI = 'mongodb://localhost:27017/capstone-project',
  PORT = 3333,
} = process.env

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

/* mongoose.connect('mongodb://localhost:27017/capstone-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}) */

const registrationRoutes = require('./registration')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, '../build')))
//const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log(`Express ready on port ${PORT}`))

app.use(cors())

app.use(function(req, res, next) {
  res.setHeader(
    'Access-Control-Allow-Methods',
    'POST, PUT, OPTIONS, DELETE, GET'
  )
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header('Access-Control-Allow-Credentials', true)
  next()
})

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/registration', registrationRoutes)

app.get('/checkToken', withAuth, function(req, res) {
  res.sendStatus(200)
})

app.get(
  '/messages',
  /* withAuth, */ (req, res) => {
    Message.find()
      .then(messages => res.json(messages))
      .catch(err => res.json(err))
  }
)

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
app.patch('/messagesTuev/:id', (req, res) => {
  MessageTuev.findByIdAndUpdate(req.params.id, req.body, { new: true })
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

const messageNoticeRoute = require('./notice')
app.use(messageNoticeRoute)

const logger = require('morgan')
const file = require('./file')

app.use(express.static(path.join(__dirname, 'client/build')))
app.use(logger('dev'))
app.use('/api/', file)

app.post('/logout', function(req, res) {
  res.clearCookie('token', { path: '/' })
  return res.sendStatus(200)

  /* res.cookie('token', 'token', {
    expires: new Date('Wed, 31 Oct 2012 08:50:17 GMT'),
  }) */
  /*   res.clearCookie('token').sendStatus(200)
   */
})

app.get('*', (req, res) => {
  res.render(path.join(__dirname, '/build/index.html'))
})
/* Server Funktion, die ich später noch brauchen werde.
app.get('/all', async (req, res) => {
  const messages = await Message.find()
  const messages2 = await MessageTuev.find()
  res.json({ messages, messages2 })
}) */
