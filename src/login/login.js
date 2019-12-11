import React from 'react'
import { Link } from 'react-router-dom'
import LoginService from '../services/LoginService'

export default function Login() {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target

    onSubmit(form)
  }
  async function onSubmit(form) {
    const data = {
      user_name: form.username,
      password: form.password,
    }

    const loginResult = await LoginService(data)

    if (loginResult !== 200) {
      this.setState({
        error: true,
        loginSuccess: false,
      })
    } else
      this.setState({
        loginSuccess: true,
        error: false,
      })
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
            <button
              type="button"
              onClick={this.onSubmit}
              className="btn btn-primary"
            >
              Login
            </button>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </form>
    </div>
  )
}
