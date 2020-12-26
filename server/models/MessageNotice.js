const mongoose = require('mongoose')

const messageNoticeShema = {
  kategorie: String,
  datum: Date,
  absender: String,
  beschreibung: String,
  anzeigen: Boolean,
}

module.exports = mongoose.model('MessageNotice', messageNoticeShema)
