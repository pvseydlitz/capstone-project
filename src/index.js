import React from 'react'
import ReactDOM from 'react-dom'
import App from './general/App'
//import Create from './second-page/Create'
import * as serviceWorker from './general/serviceWorker'

/* let route = window.location.href
const position = route.lastIndexOf('/')
route = route.substring(position)
console.log(route)
if (route === '/') {
  ReactDOM.render(<App />, document.getElementById('root'))
} else if (route === '/create') {
  ReactDOM.render(<Create></Create>, document.getElementById('root'))
} */
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
require('dotenv').config()
