const router = require('express').Router()
const MessageNotice = require('./models/MessageNotice')
router.get('/messagesNotice', (req, res) => {
  MessageNotice.find()
    .then(messages => res.json(messages))
    .catch(err => res.json(err))
})

router.post('/messagesNotice', (req, res) => {
  MessageNotice.create(req.body)
    .then(message => res.json(message))
    .catch(err => res.json(err))
})

router.patch('/messagesNotice/:id', (req, res) => {
  MessageNotice.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(message => res.json(message))
    .catch(err => res.json(err))
})
router.delete('/messagesNotice/:id', (req, res) => {
  MessageNotice.findByIdAndDelete(req.params.id)
    .then(message => res.json(message))
    .catch(err => res.json(err))
})

module.exports = router
