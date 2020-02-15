import axios from 'axios'
import bcrypt from 'bcryptjs'

const URL = process.env.REACT_APP_URL
const URLRegister = URL + '/registration/register'
const URLUser = URL + '/registration/validateUsername'

export const UserRegistration = data => {
  const password = data.password
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)

  data['password'] = hash

  return axios.post(URLRegister, data).then(res => res.status)
}

export const UsernameValidation = data =>
  axios.post(URLUser, data).then(exist => exist.status)
