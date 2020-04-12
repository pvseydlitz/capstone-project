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
  getMessagesNotice,
  postMessage,
  postMessageTuev,
  postMessageNotice,
  /* deleteMessage,
  deleteMessageTuev,
  deleteMessageNotice, */
  patchMessage,
  patchMessageTuev,
  patchMessageNotice,
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
  const [messagesNotice, setMessagesNotice] = useState([])
  useEffect(() => {
    getMessagesNotice().then(setMessagesNotice)
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
    postMessage(messageData).then((message) => {
      setMessages([message, ...messages])
    })
  }
  function createMessage2(messageData) {
    postMessageTuev(messageData).then((messageTuev) => {
      setMessagesTuev([messageTuev, ...messagesTuev])
    })
  }
  function createMessageNotice(messageData) {
    postMessageNotice(messageData).then((messageNotice) => {
      confirmSuccessfulUpload()
      setMessagesNotice([messageNotice, ...messagesNotice])
    })
  }
  function removeMessage(id) {
    /* deleteMessage(id).then((deletedMessage) => {
      setMessages(
        messages.filter((message) => message.id !== deletedMessage.id)
      )
      getMessages().then(setMessages)
    }) */
    let messageToDelete = messages.filter((message) => message._id === id)
    messageToDelete[0].anzeigen = false
    patchMessage(messageToDelete[0]).then((patchedMessage) => {
      const index = messages.findIndex(
        (message) => message._id === patchedMessage._id
      )
      messages[index] = patchedMessage
      setMessages([
        ...messages.slice(0, index),
        patchedMessage,
        ...messages.slice(index + 1),
      ])
    })
  }
  function removeMessageTuev(id) {
    /* deleteMessageTuev(id).then((deletedMessageTuev) => {
      setMessagesTuev(
        messagesTuev.filter(
          (messageTuev) => messageTuev.id !== deletedMessageTuev.id
        )
      )
      getMessagesTuev().then(setMessagesTuev)
    }) */
    let messageToDelete = messagesTuev.filter(
      (messageTuev) => messageTuev._id === id
    )
    messageToDelete[0].anzeigen = false
    patchMessageTuev(messageToDelete).then((patchedMessage) => {
      const index = messagesTuev.findIndex(
        (messageTuev) => messageTuev._id === patchedMessage._id
      )
      messagesTuev[index] = patchedMessage
      setMessagesTuev([
        ...messagesTuev.slice(0, index),
        patchedMessage,
        ...messagesTuev.slice(index + 1),
      ])
    })
  }
  function removeMessageNotice(id) {
    /* deleteMessageNotice(id).then((deletedMessageNotice) => {
      setMessagesNotice(
        messagesNotice.filter(
          (messageNotice) => messageNotice.id !== deletedMessageNotice.id
        )
      )
      getMessagesNotice().then(setMessagesNotice)
    }) */
    let messageToDelete = messagesNotice.filter(
      (messageNotice) => messageNotice._id === id
    )
    messageToDelete[0].anzeigen = false
    patchMessageNotice(messageToDelete[0]).then((patchedMessage) => {
      const index = messagesNotice.findIndex(
        (messageNotice) => messageNotice._id === patchedMessage._id
      )
      messagesNotice[index] = patchedMessage
      setMessages([
        ...messagesNotice.slice(0, index),
        patchedMessage,
        ...messagesNotice.slice(index + 1),
      ])
    })
  }
  function handleStatus(message) {
    patchMessage(message).then((patchedMessage) => {
      const index = messages.findIndex(
        (message) => message._id === patchedMessage._id
      )
      messages[index] = patchedMessage
      setMessages([
        ...messages.slice(0, index),
        patchedMessage,
        ...messages.slice(index + 1),
      ])
    })
  }
  function handleStatusTuev(messageTuev) {
    patchMessageTuev(messageTuev).then((patchedMessage) => {
      const index = messagesTuev.findIndex(
        (messageTuev) => messageTuev._id === patchedMessage._id
      )
      messagesTuev[index] = patchedMessage
      setMessagesTuev([
        ...messagesTuev.slice(0, index),
        patchedMessage,
        ...messagesTuev.slice(index + 1),
      ])
    })
  }
  function handleDelete(id) {
    confirmAlert({
      title: 'Löschen bestätigen',
      message: 'Möchten Sie diese Meldung wirklich löschen?',
      buttons: [
        {
          label: 'Ja',
          onClick: () => {
            removeMessage(id)
          },
        },
        {
          label: 'Nein',
        },
      ],
    })
  }
  function handleDeleteTuev(id) {
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
  function handleDeleteNotice(id) {
    confirmAlert({
      title: 'Löschen bestätigen',
      message: 'Möchten Sie diese Meldung wirklich löschen?',
      buttons: [
        {
          label: 'Ja',
          onClick: () => removeMessageNotice(id),
        },
        {
          label: 'Nein',
        },
      ],
    })
  }

  function confirmSuccessfulUpload() {
    confirmAlert({
      title: 'Ihre Meldung wurde erfolgreich hochgeladen.',
      buttons: [
        {
          label: 'Zur Home Seite',
          onClick: () => {
            window.location.href = '/'
          },
        },
        {
          label: 'Weitere Meldung hochladen',
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
              messagesNotice={messagesNotice}
              toggleBookmarked={toggleBookmarked}
              handleDelete={handleDelete}
              handleDeleteTuev={handleDeleteTuev}
              handleDeleteNotice={handleDeleteNotice}
              handleStatus={handleStatus}
              handleStatusTuev={handleStatusTuev}
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
              onSubmit3={createMessageNotice}
            ></Create>
          ) : (
            <Redirect to="/login"></Redirect>
          )}
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/registernewuser">
          {WithAuth() === 'right token' ? (
            <Register></Register>
          ) : (
            <Redirect to="/login"></Redirect>
          )}
        </Route>
        <Route path="/upload">
          {WithAuth() === 'right token' ? (
            <Upload></Upload>
          ) : (
            <Redirect to="/login"></Redirect>
          )}
        </Route>
      </Switch>
    </Router>
  )
}
