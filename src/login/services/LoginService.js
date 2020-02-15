import axios from 'axios'
const URL = process.env.REACT_APP_URL
const URLLogin = URL + '/registration/login'

const LoginService = data => axios.post(URLLogin, data).then(res => res.status)

export default LoginService
