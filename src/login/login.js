import React from 'react'
import { Link } from 'react-router-dom'
import LoginService from './services/LoginService'

export default function Login() {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target

    onSubmit(form)
  }
  async function onSubmit(form) {
    const data = {
      user_name: form.username.value,
      password: form.password.value,
    }
    console.log(data)
    const loginResult = await LoginService(data)
    console.log(loginResult)

    if (loginResult !== 200) {
      console.log('fail')
    } else console.log('login successful')
  }
  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="fields">
            <p>Username</p>
            <input
              type="text"
              name="username"
              autoComplete="Username"
              required
            />
          </div>
          <div className="fields">
            <p>Password</p>
            <input
              type="password"
              name="password"
              autoComplete="Password"
              required
            />
          </div>
          <div className="buttons">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </form>
    </div>
  )
}
