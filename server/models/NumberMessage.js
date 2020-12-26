const mongoose = require('mongoose')

const numberMessageShema = {
  numberMessage: Number,
}

module.exports = mongoose.model('NumberMessage', numberMessageShema)
