import axios from 'axios'
const URL = process.env.REACT_APP_URL
const URLLogin = URL + '/registration/OneUserRole'

const UserService = (user_name) =>
  axios.post(URLLogin, { user_name: user_name }).then((res) => res.data)

export default UserService
