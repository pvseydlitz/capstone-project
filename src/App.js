import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Globalstyles from './Globalstyles'
import Grid from './Grid'
import Header from './Header'
import Message from './Message'
import MessagesData from './messages'
import Footer from './Footer'

function App() {
  const [messages, setMessages] = useState(MessagesData)
  const MessageWrapper = styled.div`
    overflow-y: scroll;
  `
  function toggleBookmarked(index) {
    const message = messages[index]
    setMessages([
      ...messages.slice(0, index),
      { ...message, isBookmarked: !message.isBookmarked },
      ...messages.slice(index + 1),
    ])
    console.log(index)
  }
  return (
    <Grid>
      <Globalstyles></Globalstyles>
      <Header></Header>
      <MessageWrapper>
        {messages.map((message, index) => (
          <Message
            message={message}
            key={index}
            toggleBookmarked={() => toggleBookmarked(index)}
          ></Message>
        ))}
      </MessageWrapper>
      <Footer></Footer>
    </Grid>
  )
}

export default App
