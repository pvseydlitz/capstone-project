const mongoose = require('mongoose')

let Registration = {
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
}
/* {
    collection: 'Registration',
  } */

module.exports = mongoose.model('Registration', Registration)
