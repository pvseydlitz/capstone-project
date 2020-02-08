import axios from 'axios'
import bcrypt from 'bcryptjs'

export const UserRegistration = data => {
  const password = data.password
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)

  data['password'] = hash

  return axios
    .post('http://192.168.178.20:3000/registration/register', data)
    .then(res => res.status)
}

export const UsernameValidation = data =>
  axios
    .post('http://192.168.178.20:3000/registration/validateUsername', data) //davor war URL localhost:3000/regi...
    .then(exist => exist.status)
