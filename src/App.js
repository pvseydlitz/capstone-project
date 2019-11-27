import React from 'react'
import Message from './Message'
import Globalstyles from './Globalstyles'
import messages from './messages'
import Header from './Header'
import Grid from './Grid'
import styled from 'styled-components/macro'

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
      <div style={{ background: 'lightgrey', height: '91px' }}></div>
    </Grid>
  )
}

export default App
