const mongoose = require('mongoose')
const Message = require('./models/Message')
const MessageTuev = require('./models/MessageTuev')
const User = require('./models/User')
const express = require('express')

mongoose.connect('mongodb://localhost:27017/capstone-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log(`Express ready on port ${PORT}`))

/* Server Funktion, die ich später noch brauchen werde.
app.get('/all', async (req, res) => {
  const messages = await Message.find()
  const messages2 = await MessageTuev.find()
  res.json({ messages, messages2 })
}) */

app.get('/messages', (req, res) => {
  Message.find()
    .then(messages => res.json(messages))
    .catch(err => res.json(err))
})

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

app.get('/', (req, res) => {
  User.find()
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

//POST route for updating data
/* app.post('/', function(req, res, next) {
  // confirm that user typed same password twice
  if (req.body.password !== req.body.passwordConf) {
    var err = new Error('Passwords do not match.')
    err.status = 400
    res.send('passwords dont match')
    return next(err)
  }

  if (
    req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf
  ) {
    var userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    }

    User.create(userData, function(error, user) {
      if (error) {
        return next(error)
      } else {
        req.session.userId = user._id
        return res.redirect('/profile')
      }
    })
  } else if (req.body.logemail && req.body.logpassword) {
    User.authenticate(req.body.logemail, req.body.logpassword, function(
      error,
      user
    ) {
      if (error || !user) {
        var err = new Error('Wrong email or password.')
        err.status = 401
        return next(err)
      } else {
        req.session.userId = user._id
        return res.redirect('/profile')
      }
    })
  } else {
    var err2 = new Error('All fields required.')
    err.status = 400
    return next(err2)
  }
})
 */
