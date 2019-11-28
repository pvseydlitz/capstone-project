import React from 'react'
import styled from 'styled-components/macro'
import Globalstyles from './Globalstyles'
import Grid from './Grid'
import Header from './Header'
import Message from './Message'
import messages from './messages'
import Footer from './Footer'

function App() {
  const MessageWrapper = styled.div`
    overflow-y: scroll;
  `
  return (
    <Grid>
      <Globalstyles></Globalstyles>
      <Header></Header>
      <MessageWrapper>
        {messages.map((message, index) => (
          <Message message={message} key={index}></Message>
        ))}
      </MessageWrapper>
      <Footer></Footer>
    </Grid>
  )
}

export default App
