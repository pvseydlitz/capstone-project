const mongoose = require('mongoose')

const messageTuevSchema = {
  nummer: Number,
  ort: String,
  beschreibung: String,
  status: String,
  anzeigen: Boolean,
}

module.exports = mongoose.model('MessageTuev', messageTuevSchema)
