const mongoose = require('mongoose')

const messageSchema = {
  kategorie: String,
  name: String,
  telefonnummer: String,
  email: String,
  datum: Date,
  wohnung: String,
  raumbezeichnung: String,
  innenbereich: String,
  außenbereich: String,
  gemeinschaftseigentum: String,
  sondereigentum: String,
  bereich: Array,
  beschreibung: String,
  url: String,
  isBookmarked: Boolean,
  status: Number,
}

module.exports = mongoose.model('Message', messageSchema)
