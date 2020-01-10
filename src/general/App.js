import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

import Home from '../first-page/Home'
import Create from '../second-page/Create'
import Upload from '../third-page/Upload'
import Login from '../login/login'
import Register from '../login/Registration'
import WithAuth from '../login/withAuth'

import {
  getMessages,
  getMessagesTuev,
  postMessage,
  deleteMessage,
  deleteMessageTuev,
  postMessagesTuev,
} from './services'

export default function App() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    getMessages().then(setMessages)
  }, [])
  const [messagesTuev, setMessagesTuev] = useState([])
  useEffect(() => {
    getMessagesTuev().then(setMessagesTuev)
  }, [])

  function toggleBookmarked(index) {
    const message = messages[index]
    setMessages([
      ...messages.slice(0, index),
      { ...message, isBookmarked: !message.isBookmarked },
      ...messages.slice(index + 1),
    ])
  }
  function createMessage(messageData) {
    postMessage(messageData).then(message => {
      setMessages([...messages, message])
    })
  }
  function createMessage2(messageData) {
    postMessagesTuev(messageData).then(messageTuev => {
      setMessagesTuev([...messagesTuev, messageTuev])
    })
  }
  function removeMessage(id) {
    console.log(id)
    deleteMessage(id).then(deletedMessage => {
      setMessages(messages.filter(message => message.id !== deletedMessage.id))
      getMessages().then(setMessages)
    })
  }
  function removeMessageTuev(id) {
    deleteMessageTuev(id).then(deletedMessageTuev => {
      setMessagesTuev(
        messagesTuev.filter(
          messageTuev => messageTuev.id !== deletedMessageTuev.id
        )
      )
      getMessagesTuev().then(setMessagesTuev)
    })
  }
  function handleClick(id) {
    confirmAlert({
      title: 'Löschen bestätigen',
      message: 'Möchten Sie diese Meldung wirklich löschen?',
      buttons: [
        {
          label: 'Ja',
          onClick: () => removeMessage(id),
        },
        {
          label: 'Nein',
        },
      ],
    })
  }
  function handleClickTuev(id) {
    confirmAlert({
      title: 'Löschen bestätigen',
      message: 'Möchten Sie diese Meldung wirklich löschen?',
      buttons: [
        {
          label: 'Ja',
          onClick: () => removeMessageTuev(id),
        },
        {
          label: 'Nein',
        },
      ],
    })
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {WithAuth() === 'right token' ? (
            <Home
              messages={messages}
              messagesTuev={messagesTuev}
              toggleBookmarked={toggleBookmarked}
              handleClick={handleClick}
              handleClickTuev={handleClickTuev}
            ></Home>
          ) : (
            <Redirect to="/login"></Redirect>
          )}
        </Route>
        <Route path="/create">
          {WithAuth() === 'right token' ? (
            <Create
              onSubmit1={createMessage}
              onSubmit2={createMessage2}
            ></Create>
          ) : (
            <Redirect to="/login"></Redirect>
          )}
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/upload">
          <Upload></Upload>
        </Route>
      </Switch>
    </Router>
  )
}
