import React from 'react'
import Message from './Message'
import Globalstyles from './Globalstyles'
import messages from './messages'
import Header from './Header'
import styled from 'styled-components/macro'

function App() {
  const App = styled.div`
    display: grid;
    grid-template-rows: 97px auto 91px;
  `
  return (
    <App>
      <Globalstyles></Globalstyles>
      <Header></Header>
      {messages.map((message, index) => (
        <Message message={message} key={index}></Message>
      ))}
      <div style={{ background: 'black', height: '91px' }}></div>
    </App>
  )
}

export default App
