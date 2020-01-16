const mongoose = require('mongoose')

const messageNoticeShema = {
  kategorie: String,
  datum: Date,
  beschreibung: String,
}

module.exports = mongoose.model('MessageNotice', messageNoticeShema)
