const mongoose = require('mongoose')

const RegistrationShema = {
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  user_name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  bookmarked_messages: {
    type: Array,
  },
}

module.exports = mongoose.model('Registration', RegistrationShema)
