const jwt = require('jsonwebtoken')
const SECRET =
  process.env.SECRET ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVlMTM0YWM4NjVhNTU1NWUwZmQxNTVhNSIsImZpcnN0X25hbWUiOiJwIiwibGFzdF9uYW1lIjoicyIsInVzZXJfbmFtZSI6InB2cyIsInBhc3N3b3JkIjoiJDJhJDEwJGpnUE5rMUJhVGRxQmlzNXZWYWZFeE9vNEdSRC8vL080bVJLeHJuUkc1aFlnaVdWY2ZtRjNhIiwiX192IjowfSwiaWF0IjoxNTc4OTIxMDY1LCJleHAiOjE1Nzg5MjQ2NjV9.9ZIZj-rcdlEaV7fZAThrg92dMARUbnrlNlGtOLAOTAo'
const withAuth = function (req, res, next) {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.cookies.token
  if (!token) {
    res.status(401).send('Unauthorized: No token provided')
  } else {
    jwt.verify(token, SECRET, function (err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token')
      } else {
        req.email = decoded.email
        next()
      }
    })
  }
}

module.exports = withAuth
