import React from 'react'
import Message from './Message'
import Globalstyles from './Globalstyles'
import messages from './messages'

function App() {
  return (
    <div className="App">
      <Globalstyles></Globalstyles>
      {messages.map((message, index) => (
        <Message message={message} key={index}></Message>
      ))}
    </div>
  )
}

export default App
