const mongoose = require('mongoose')

const messageNoticeShema = {
  datum: Date,
  name: String,
  beschreibung: String,
  anzeigen: Boolean,
}

module.exports = mongoose.model('MessageNotice', messageNoticeShema)
