import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Create from './second-page/Create'
import { getMessages, postMessage, deleteMessage } from './services'

export default function App() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    getMessages().then(setMessages)
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
  function removeMessage(id) {
    deleteMessage(id).then(deletedMessage => {
      setMessages(messages.filter(message => message.id !== deletedMessage.id))
      getMessages().then(setMessages)
    })
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home
            messages={messages}
            toggleBookmarked={toggleBookmarked}
            handleClick={removeMessage}
          ></Home>
        </Route>
        <Route path="/create">
          <Create onSubmit={createMessage}></Create>
        </Route>
      </Switch>
    </Router>
  )
}
