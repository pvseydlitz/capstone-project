const mongoose = require('mongoose')

const messageTuevSchema = {
  nummer: Number,
  ort: String,
  mangel: String,
}

module.exports = mongoose.model('MessageTuev', messageTuevSchema)
