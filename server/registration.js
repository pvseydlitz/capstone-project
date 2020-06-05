const express = require('express')
const registrationRoutes = express.Router()
const bcrypt = require('bcryptjs')
const Registration = require('./models/User')
const jwt = require('jsonwebtoken')
const withAuth = require('./middleware')
const SECRET =
  process.env.SECRET ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVlMTM0YWM4NjVhNTU1NWUwZmQxNTVhNSIsImZpcnN0X25hbWUiOiJwIiwibGFzdF9uYW1lIjoicyIsInVzZXJfbmFtZSI6InB2cyIsInBhc3N3b3JkIjoiJDJhJDEwJGpnUE5rMUJhVGRxQmlzNXZWYWZFeE9vNEdSRC8vL080bVJLeHJuUkc1aFlnaVdWY2ZtRjNhIiwiX192IjowfSwiaWF0IjoxNTc4OTIxMDY1LCJleHAiOjE1Nzg5MjQ2NjV9.9ZIZj-rcdlEaV7fZAThrg92dMARUbnrlNlGtOLAOTAo'
// Registration route
registrationRoutes.route('/register').post(function (req, res) {
  let register = new Registration(req.body)
  register
    .save()
    .then((reg) => {
      res.sendStatus(200)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
})
// Login Router
registrationRoutes.route('/login').post(function (req, res) {
  Registration.findOne({ user_name: req.body.user_name }).then((user) => {
    console.log('User from login', user)
    if (!user) res.sendStatus(204)
    else {
      bcrypt
        .compare(req.body.password, user.password)
        .then((passwordMatch) =>
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
registrationRoutes.route('/validateUsername').post(function (req, res) {
  Registration.findOne({ user_name: req.body.user_name }).then((user) =>
    user ? res.sendStatus(204) : res.sendStatus(200)
  )
})

// Get allData
registrationRoutes.route('/allData').get(withAuth, function (req, res) {
  Registration.find((err, data) =>
    err ? res.status(400).send('Error occured') : res.json(data)
  )
})
registrationRoutes.route('/oneUser').post(function (req, res) {
  Registration.findOne({ user_name: req.body.user_name }).then((user) =>
    user ? res.json(user._id) : res.sendStatus(204)
  )
})

module.exports = registrationRoutes
