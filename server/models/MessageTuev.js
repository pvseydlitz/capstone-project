const mongoose = require('mongoose')

const messageTuevSchema = {
  nummer: Number,
  ort: String,
  beschreibung: String,
}

module.exports = mongoose.model('MessageTuev', messageTuevSchema)
