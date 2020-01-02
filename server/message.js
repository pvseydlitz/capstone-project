const router = require('express').Router()
const Message = require('./models/Message')
router.get('/messages', (req, res) => {
  Message.find()
    .then(messages => res.json(messages))
    .catch(err => res.json(err))
})

module.exports = router
