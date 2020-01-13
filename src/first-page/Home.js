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

const PASSWORD = process.env.REACT_APP_PASSWORD

function Home({
  messages,
  messagesTuev,
  toggleBookmarked,
  handleClick,
  handleClickTuev,
  handleStatus,
}) {
  const MessageWrapper = styled.div`
    overflow-y: scroll;
  `
  const [isOnlyBookmarkShown, setIsOnlyBookmarkShown] = useState(false)
  const [isClicked1, setIsClicked1] = useState(true)
  const [isClicked2, setIsClicked2] = useState()
  const [searchedNumber, setSearchedNumber] = useState('')
  const [showFilterMenu, setShowFilterMenu] = useState(false)
  const [searchedWord, setSearchedWord] = useState('')
  const [selectedMonth, setSelectedMonth] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [showInputPassword, setShowInputPassword] = useState(false)

  function handleClick1() {
    setIsClicked1(true)
    setIsClicked2(false)
  }

  function handleClick2() {
    setIsClicked1(false)
    setIsClicked2(true)
  }

  function saveMessageId(id) {
    localStorage.setItem('id', id)
  }

  function checkPasswordInput(password) {
    const id = localStorage.getItem('id')
    const data = password
    if (data === PASSWORD) {
      handleClick(id)
      handleClickTuev(id)
      localStorage.clear()
    }
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
          <FilterMenu
            handleClick={() => setIsOnlyBookmarkShown(!isOnlyBookmarkShown)}
            filterActive={isOnlyBookmarkShown}
            checkInput={event =>
              setSearchedWord(event.target.value.toLowerCase())
            }
            searchedWord={searchedWord}
            handleChangeMonth={event => setSelectedMonth(event.target.value)}
            selectedMonth={selectedMonth}
            handleChangeYear={event => setSelectedYear(event.target.value)}
            selectedYear={selectedYear}
          ></FilterMenu>
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
                    handleClick={() => {
                      setShowInputPassword(true)
                      saveMessageId(message._id)
                    }}
                    handleStatus={handleStatus}
                  ></Message>
                ))
            : messages
                .filter(message => {
                  const bereich = message.bereich.join().toLowerCase()
                  const wohnung = message.wohnung.toLowerCase()
                  const raumbezeichnung = message.raumbezeichnung.toLowerCase()
                  const query = searchedWord
                  return (
                    query === '' ||
                    bereich.includes(query) ||
                    wohnung.includes(query) ||
                    raumbezeichnung.includes(query)
                  )
                })
                .filter(message => {
                  const datumMonth = message.datum.slice(5, 7)
                  const queryMonth = selectedMonth
                  return queryMonth === '' || datumMonth.includes(queryMonth)
                })
                .filter(message => {
                  const datumYear = message.datum.slice(0, 4)
                  const queryYear = selectedYear
                  return queryYear === '' || datumYear.includes(queryYear)
                })
                .map((message, index) => (
                  <Message
                    message={message}
                    key={index}
                    toggleBookmarked={() => toggleBookmarked(index)}
                    handleClick={() => {
                      setShowInputPassword(true)
                      saveMessageId(message._id)
                    }}
                    handleStatus={handleStatus}
                  ></Message>
                ))
          : searchedNumber === ''
          ? messagesTuev.map((messageTuev, index) => (
              <MessageTuev
                messageTuev={messageTuev}
                key={index}
                /*  handleClickTuev={() => handleClickTuev(messageTuev._id)} */
                handleClickTuev={() => {
                  setShowInputPassword(true)
                  saveMessageId(messageTuev._id)
                }}
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
                  handleClickTuev={() => {
                    setShowInputPassword(true)
                    saveMessageId(messageTuev._id)
                  }}
                ></MessageTuev>
              ))}
      </MessageWrapper>
      {showInputPassword ? (
        <Label onClick={() => setShowInputPassword(false)}>
          <PasswordWrapper>
            <Text>Passwort eingeben zum Löschen</Text>
            <Input
              type="password"
              placeholder="Passwort eingeben"
              autoFocus
              onChange={event => checkPasswordInput(event.target.value)}
            ></Input>
          </PasswordWrapper>
        </Label>
      ) : (
        ''
      )}
      <Footer></Footer>
    </Grid>
  )
}
export default Home

const Label = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: lightgray;
  opacity: 0.9;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const PasswordWrapper = styled.section`
  padding: 20px;
  height: 120px;
  width: 200px;
  display: grid;
  grid-template-rows: 1fr 1fr;
`
const Text = styled.h3`
  margin: 0;
  font-size: 16px;
  color: rgb(107, 107, 107);
`
const Input = styled.input`
  height: 32px;
  width: auto;
  border: solid 2px rgb(201 193 171);
`
