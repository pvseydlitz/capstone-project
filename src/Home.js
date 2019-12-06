import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Globalstyles from './Globalstyles'
import Grid from './Grid'
import Header from './Header'
import RadioButtons from './RadioButtons'
import Message from './Message'
import MessageTuev from './MessageTuev'
import Footer from './Footer'

function Home({ messages, messagesTuev, toggleBookmarked, handleClick }) {
  const MessageWrapper = styled.div`
    overflow-y: scroll;
  `
  const [isOnlyBookmarkShown, setIsOnlyBookmarkShown] = useState(false)
  const [isClicked1, setIsClicked1] = useState(true)
  const [isClicked2, setIsClicked2] = useState()
  function handleClick1() {
    setIsClicked1(true)
    setIsClicked2(false)
  }

  function handleClick2() {
    setIsClicked1(false)
    setIsClicked2(true)
  }
  return (
    <Grid>
      <Globalstyles></Globalstyles>
      <Header
        filterMessages={() => setIsOnlyBookmarkShown(!isOnlyBookmarkShown)}
        filterActive={isOnlyBookmarkShown}
        showFilter={isClicked1}
      ></Header>
      <MessageWrapper>
        <RadioButtons
          handleClick1={handleClick1}
          handleClick2={handleClick2}
          isClicked1={isClicked1}
          isClicked2={isClicked2}
        ></RadioButtons>
        {isClicked1
          ? isOnlyBookmarkShown
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
              ))
          : messagesTuev.map((messageTuev, index) => (
              <MessageTuev
                messageTuev={messageTuev}
                key={index}
                handleClick={() => handleClick(messageTuev._id)}
              ></MessageTuev>
            ))}
      </MessageWrapper>
      <Footer></Footer>
    </Grid>
  )
}

export default Home
