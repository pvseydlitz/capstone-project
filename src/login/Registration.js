import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import {
  UserRegistration,
  UsernameValidation,
} from './services/RegistrationService'

export default function Registration() {
  const [isUsernameTaken, setIsUsernameTaken] = useState()
  async function handleOnBlur(event) {
    const data = {
      user_name: event.target.value,
    }
    const isUsernameTaken = await UsernameValidation(data)
    isUsernameTaken === 204
      ? setIsUsernameTaken(true)
      : setIsUsernameTaken(false)
  }
  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const data = {
      first_name: form.firstName.value,
      last_name: form.lastName.value,
      user_name: form.username.value,
      password: form.password.value,
    }

    const registerStatus = await UserRegistration(data)
    if (registerStatus === 200) {
      console.log('register successful')
    } else console.log('fail')
  }
  return (
    <div className="Registration">
      <h1>Regietrierung</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="fields">
            <p>Vorname</p>
            <input type="text" name="firstName" />
          </div>
          <div className="fields">
            <p>Nachname</p>
            <input type="text" name="lastName" />
          </div>
          <div className="fields">
            <p>Benutzername</p>
            <input
              type="text"
              /* className={classNames({ error: user_name_taken })} */

              name="username"
              onBlur={handleOnBlur}
              autoComplete="Username"
              required
            />
          </div>
          <div className="fields">
            <p>Passwort</p>
            <input
              type="password"
              name="password"
              autoComplete="password"
              required
            />
          </div>
          <div className="buttons">
            <button
              type="submit"
              className="btn btn-primary"
              /* disabled={isUserNameTaken} */
            >
              Registrieren
            </button>
            <Link to="/login">Cancel</Link>
          </div>
        </div>
      </form>
    </div>
  )
}
