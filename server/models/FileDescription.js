const mongoose = require('mongoose')

const fileDescriptionShema = {
  documentId: String,
  description: String,
  fileName: String,
}

module.exports = mongoose.model('FileDescription', fileDescriptionShema)
