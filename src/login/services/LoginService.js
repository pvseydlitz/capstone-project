import axios from 'axios'

const LoginService = data =>
  axios
    .post('http://192.168.178.20:3000/registration/login', data)
    .then(res => res.status)

export default LoginService
