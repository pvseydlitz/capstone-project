const mongoose = require('mongoose')

const messageTuevSchema = {
  nummer: Number,
  ort: String,
  beschreibung: String,
  status: Number,
  anzeigen: Boolean,
}

module.exports = mongoose.model('MessageTuev', messageTuevSchema)
