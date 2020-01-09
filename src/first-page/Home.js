import React, { useState } from 'react'
import styled from 'styled-components/macro'

import Globalstyles from '../general/Globalstyles'
import Grid from '../general/Grid'
import Header from '../general/Header'
import FilterMenu from '../first-page/FilterMenu'
import RadioButtons from './RadioButtons'
import Message from './Message'
import MessageTuev from './MessageTuev'
import Footer from '../general/Footer'

function Home({
  messages,
  messagesTuev,
  toggleBookmarked,
  handleClick,
  handleClickTuev,
}) {
  const MessageWrapper = styled.div`
    overflow-y: scroll;
  `
  const [isOnlyBookmarkShown, setIsOnlyBookmarkShown] = useState(false)
  const [isClicked1, setIsClicked1] = useState(true)
  const [isClicked2, setIsClicked2] = useState()
  const [searchedNumber, setSearchedNumber] = useState('')
  const [showFilterMenu, setShowFilterMenu] = useState(false)

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
        showFilter={isClicked1}
        showSearchIcon={!isClicked1}
        checkInput={event =>
          setSearchedNumber(event.target.value.toLowerCase())
        }
        searchedNumber={searchedNumber.toLowerCase()}
        handleClick={() => setShowFilterMenu(!showFilterMenu)}
      ></Header>
      <MessageWrapper>
        {showFilterMenu ? (
          <section style={{ height: '100px', width: '100%' }}>
            <FilterMenu
              handleClick={() => setIsOnlyBookmarkShown(!isOnlyBookmarkShown)}
              filterActive={isOnlyBookmarkShown}
            ></FilterMenu>
          </section>
        ) : (
          ''
        )}
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
          : searchedNumber === ''
          ? messagesTuev.map((messageTuev, index) => (
              <MessageTuev
                messageTuev={messageTuev}
                key={index}
                handleClickTuev={() => handleClickTuev(messageTuev._id)}
              ></MessageTuev>
            ))
          : messagesTuev
              .filter(messageTuev => {
                const nummer = String(messageTuev.nummer)
                const ort = messageTuev.ort.toLowerCase()
                const query = searchedNumber
                return (
                  query === '' || nummer.includes(query) || ort.includes(query)
                )
              })
              .map((messageTuev, index) => (
                <MessageTuev
                  messageTuev={messageTuev}
                  key={index}
                  handleClickTuev={() => handleClickTuev(messageTuev._id)}
                ></MessageTuev>
              ))}
      </MessageWrapper>
      <Footer></Footer>
    </Grid>
  )
}
export default Home
