import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Globalstyles from './Globalstyles'
import Grid from './Grid'
import Header from './Header'
import Message from './Message'
import Footer from './Footer'

function Home({ messages, toggleBookmarked, handleClick }) {
  const MessageWrapper = styled.div`
    overflow-y: scroll;
  `

  const [isOnlyBookmarkShown, setIsOnlyBookmarkShown] = useState(false)
  return (
    <Grid>
      <Globalstyles></Globalstyles>
      <Header
        filterMessages={() => setIsOnlyBookmarkShown(!isOnlyBookmarkShown)}
        filterActive={isOnlyBookmarkShown}
      ></Header>
      <MessageWrapper>
        {isOnlyBookmarkShown
          ? messages
              .filter(message => message.isBookmarked === true)
              .map((message, index) => (
                <Message
                  message={message}
                  key={index}
                  toggleBookmarked={() => toggleBookmarked(index)}
                  handleClick={() => handleClick(message._id)}
                ></Message>
              ))
          : messages.map((message, index) => (
              <Message
                message={message}
                key={index}
                toggleBookmarked={() => toggleBookmarked(index)}
                handleClick={() => handleClick(message._id)}
              ></Message>
            ))}
      </MessageWrapper>
      <Footer></Footer>
    </Grid>
  )
}

export default Home
