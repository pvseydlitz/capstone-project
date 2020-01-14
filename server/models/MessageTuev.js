const mongoose = require('mongoose')

const messageTuevSchema = {
  nummer: Number,
  ort: String,
  beschreibung: String,
  status: Number,
}

module.exports = mongoose.model('MessageTuev', messageTuevSchema)
