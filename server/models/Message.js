const mongoose = require('mongoose')

const messageSchema = {
  category: String,
  description: String,
  content: String,
  isBookmarked: Boolean,
}

module.exports = mongoose.model('Message', messageSchema)
