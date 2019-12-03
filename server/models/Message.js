const mongoose = require('mongoose')

const messageSchema = {
  kategorie: String,
  name: String,
  telefonnummer: String,
  email: String,
  datum: String,
  wohnung: String,
  raumbezeichnung: String,
  innenbereich: String,
  außenbereich: String,
  gemeinschaftseigentum: String,
  sondereigentum: String,
  beschreibung: String,
  isBookmarked: Boolean,
}

module.exports = mongoose.model('Message', messageSchema)
