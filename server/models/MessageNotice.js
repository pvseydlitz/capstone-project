const mongoose = require('mongoose')

const messageNoticeShema = {
  kategorie: String,
  datum: Date,
  beschreibung: String,
  anzeigen: Boolean,
}

module.exports = mongoose.model('MessageNotice', messageNoticeShema)
