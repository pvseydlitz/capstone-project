import axios from 'axios'
import bcrypt from 'bcryptjs'

export const UserRegistration = data => {
  const password = data.password
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)

  data['password'] = hash

  return axios
    .post(
      'https://mighty-atoll-99320.herokuapp.com/registration/register',
      data
    )
    .then(res => res.status)
}

export const UsernameValidation = data =>
  axios
    .post(
      'https://mighty-atoll-99320.herokuapp.com/registration/validateUsername',
      data
    ) //davor war URL localhost:3000/regi...
    .then(exist => exist.status)
