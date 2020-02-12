import axios from 'axios'

const LoginService = data =>
  axios
    .post('https://mighty-atoll-99320.herokuapp.com/registration/login', data)
    .then(res => res.status)

export default LoginService
