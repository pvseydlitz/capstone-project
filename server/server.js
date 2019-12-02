const mongoose = require('mongoose')
const Message = require('./models/Message')
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