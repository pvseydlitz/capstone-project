const jwt = require('jsonwebtoken')
const SECRET = process.env.REACT_APP_SECRET || 'mysecretsshhh'

const withAuth = function(req, res, next) {
  console.log('with Auth')
  const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.cookies.token
  console.log('token: ' + token)
  if (!token) {
    res.status(401).send('Unauthorized: No token provided')
  } else {
    jwt.verify(token, SECRET, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token')
      } else {
        req.email = decoded.email
        next()
        console.log('works')
      }
    })
  }
}

module.exports = withAuth
