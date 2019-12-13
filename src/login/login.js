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
    const loginResult = await LoginService(data)
    console.log(loginResult)

    if (loginResult !== 200) {
      console.log('fail')
    } else console.log('login successful')
    fetch('/registration/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.status === 200) {
          const token = res.token
          console.log(token)
          localStorage.setItem('jwt', token)
        } else {
          const error = new Error(res.error)
          throw error
        }
      })
      .catch(err => {
        console.error(err)
        alert('Error logging in please try again')
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
