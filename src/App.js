import React from 'react'
import Message from './Message'
import Globalstyles from './Globalstyles'
import messages from './messages'

function App() {
  return (
    <div className="App">
      <Globalstyles></Globalstyles>
      {messages.map((message, index, isBookmarked) => (
        <Message
          message={message}
          key={index}
          isBookmarked={isBookmarked}
        ></Message>
      ))}
    </div>
  )
}

export default App
