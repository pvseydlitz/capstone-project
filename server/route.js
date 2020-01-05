const express = require('express')
const registrationRoutes = express.Router()
const bcrypt = require('bcryptjs')
const Registration = require('./models/User')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET
console.log('secret ==  ' + SECRET)
// Registration route
registrationRoutes.route('/register').post(function(req, res) {
  let register = new Registration(req.body)
  register
    .save()
    .then(reg => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})
// Login Router
registrationRoutes.route('/login').post(function(req, res) {
  Registration.findOne({ user_name: req.body.user_name }).then(user => {
    console.log('User from login', user)
    if (!user) res.sendStatus(204)
    else {
      bcrypt
        .compare(req.body.password, user.password)
        .then(passwordMatch =>
          passwordMatch ? handleSession(res, user) : res.sendStatus(204)
        )
    }
  })
})
function handleSession(res, user) {
  const payload = { user }
  const token = jwt.sign(payload, SECRET, {
    expiresIn: '1h',
  })
  res.cookie('token', token, { httpOnly: true }).sendStatus(200)
}
// Username validation Router
registrationRoutes.route('/validateUsername').post(function(req, res) {
  Registration.findOne({ user_name: req.body.user_name }).then(user =>
    user ? res.sendStatus(204) : res.sendStatus(200)
  )
})

// Get allData
registrationRoutes.route('/allData').get(function(req, res) {
  Registration.find((err, data) =>
    err ? res.status(400).send('Error occured') : res.json(data)
  )
})

module.exports = registrationRoutes
