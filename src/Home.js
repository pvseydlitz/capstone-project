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
  const RadioButtons = styled.section`
    margin: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  `
  const Button = styled.input`
    visibility: hidden;
    height: 0;
    width: 0;
    &:checked {
      background: #ebf5d7;
      color: #5a9900;
      box-shadow: none;
    }
  `
  const Label1 = styled.label`
    border: 2px solid rgb(187 179 163);
    border-radius: 0.5em;
    padding: 0.5em;
    display: flex;
    justify-content: center;
    background: ${props => (props.active ? 'green' : '')};
  `
  const Label2 = styled.label`
    border: 2px solid rgb(187 179 163);
    border-radius: 0.5em;
    padding: 0.5em;
    display: flex;
    justify-content: center;
    background: ${props => (props.active ? 'green' : '')};
  `
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
  const [isOnlyBookmarkShown, setIsOnlyBookmarkShown] = useState(false)
  return (
    <Grid>
      <Globalstyles></Globalstyles>
      <Header
        filterMessages={() => setIsOnlyBookmarkShown(!isOnlyBookmarkShown)}
        filterActive={isOnlyBookmarkShown}
      ></Header>
      <MessageWrapper>
        <RadioButtons>
          <Label1 for="b1" onClick={handleClick1} active={isClicked1}>
            <Button type="radio" id="b1" name="group-b" />
            Gewährleistungsmängel
          </Label1>
          <Label2 for="b2" onClick={handleClick2} active={isClicked2}>
            <Button type="radio" id="b2" name="group-b" />
            TÜV-Mängel
          </Label2>
        </RadioButtons>
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
