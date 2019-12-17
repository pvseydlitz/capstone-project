import axios from 'axios'

const LoginService = data =>
  axios
    .post('http://localhost:3333/registration/login', data)
    .then(res => res.status)

export default LoginService
