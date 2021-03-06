import React, { useState } from 'react'
import styled from 'styled-components/macro'

import Grid from '../general/Grid'
import Globalstyles from '../general/Globalstyles'
import Header from '../general/Header'
import FilterMenu from '../first-page/FilterMenu'
import FilterMenuTuevMessages from './FilterMenuTuevMessages'
import FilterMenuNoticeMessages from './FilterMenuNoticeMessages'
import RadioButtons from './RadioButtons'
import Message from './Message'
import MessageTuev from './MessageTuev'
import MessageNotice from './MessageNotice'

import checkTime from '../general/checkTime.js'

export default function Home({
  messages,
  messagesTuev,
  messagesNotice,
  handleDelete,
  handleDeleteTuev,
  handleDeleteNotice,
  handleStatus,
  //handleStatusTuev,
}) {
  //Radio Buttons
  const [isClicked1, setIsClicked1] = useState(true)
  const [isClicked2, setIsClicked2] = useState()
  const [isClicked3, setIsClicked3] = useState()
  //First type of message 'Gewährleistungsmängel'
  const [showFilterMenu, setShowFilterMenu] = useState(false)
  const [isOnlyBookmarkShown, setIsOnlyBookmarkShown] = useState(false)
  const [searchedWord, setSearchedWord] = useState('')
  const [selectedMonth, setSelectedMonth] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  //Second type of message 'Tüv-Mängel'
  const [showFilterMenuTuevMessages, setShowFilterMenuTuevMessages] = useState(
    false
  )
  const [searchedWordFilter2, setSearchedWordFilter2] = useState('')
  //const [selectedStatus, setSelectedStatus] = useState('')
  //Third type of message 'Allgemeines'
  const [
    showFilterMenuNoticeMessages,
    setShowFilterMenuNoticeMessages,
  ] = useState(false)
  const [searchedWord2, setSearchedWord2] = useState('')
  const [selectedMonth3, setSelectedMonth3] = useState('')
  const [selectedYear3, setSelectedYear3] = useState('')

  const [backgroundWhite, setBackgroundWhite] = useState(false)

  function handleClick1() {
    setIsClicked1(true)
    setIsClicked2(false)
    setIsClicked3(false)
    setShowFilterMenuTuevMessages(false)
    setShowFilterMenuNoticeMessages(false)
  }
  function handleClick2() {
    setIsClicked1(false)
    setIsClicked2(true)
    setIsClicked3(false)
    setShowFilterMenu(false)
    setShowFilterMenuTuevMessages(false)
  }
  function handleClick3() {
    setIsClicked1(false)
    setIsClicked2(false)
    setIsClicked3(true)

    setShowFilterMenu(false)
    setShowFilterMenuNoticeMessages(false)
  }

  return (
    <Grid onMouseEnter={() => checkTime()}>
      <Globalstyles></Globalstyles>
      <Header
        showFilter1={isClicked1}
        showFilter2={isClicked2}
        showFilter3={isClicked3}
        handleClick1={() => setShowFilterMenu(!showFilterMenu)}
        handleClick2={() =>
          setShowFilterMenuNoticeMessages(!showFilterMenuNoticeMessages)
        }
        handleClick3={() =>
          setShowFilterMenuTuevMessages(!showFilterMenuTuevMessages)
        }
        filterMenu1Active={showFilterMenu}
        filterMenu2Active={showFilterMenuNoticeMessages}
        filterMenu3Active={showFilterMenuTuevMessages}
        backgroundInvisible={() => setBackgroundWhite(!backgroundWhite)}
      ></Header>
      <MessageWrapper id="messageWrapper" active={backgroundWhite}>
        {showFilterMenu ? (
          <FilterMenu
            handleClick={() => setIsOnlyBookmarkShown(!isOnlyBookmarkShown)}
            filterActive={isOnlyBookmarkShown}
            checkInput={(event) =>
              setSearchedWord(event.target.value.toLowerCase())
            }
            searchedWord={searchedWord}
            handleChangeMonth={(event) => setSelectedMonth(event.target.value)}
            selectedMonth={selectedMonth}
            handleChangeYear={(event) => setSelectedYear(event.target.value)}
            selectedYear={selectedYear}
          ></FilterMenu>
        ) : (
          ''
        )}
        {showFilterMenuNoticeMessages ? (
          <FilterMenuNoticeMessages
            checkInput={(event) => setSearchedWord2(event.target.value)}
            selectedWord={searchedWord2}
            handleChangeMonth={(event) => setSelectedMonth3(event.target.value)}
            selectedMonth={selectedMonth3}
            handleChangeYear={(event) => setSelectedYear3(event.target.value)}
            selectedYear={selectedYear3}
          ></FilterMenuNoticeMessages>
        ) : (
          ''
        )}
        {showFilterMenuTuevMessages ? (
          <FilterMenuTuevMessages
            checkInput={(event) =>
              setSearchedWordFilter2(event.target.value.toLowerCase())
            }
            /* handleFilterStatus={(event) =>
              setSelectedStatus(event.target.value)
            } */
          ></FilterMenuTuevMessages>
        ) : (
          ''
        )}
        <RadioButtons
          handleClick1={handleClick1}
          handleClick2={handleClick2}
          handleClick3={handleClick3}
          isClicked1={isClicked1}
          isClicked2={isClicked2}
          isClicked3={isClicked3}
        ></RadioButtons>
        <MessageWrapper2>
          {isClicked1
            ? isOnlyBookmarkShown
              ? messages
                  .filter((message) => message.isBookmarked === true)
                  .reverse()
                  .map((message, index) => (
                    <Message
                      message={message}
                      key={index}
                      handleDelete={handleDelete}
                      handleStatus={handleStatus}
                      updateBookmarks={!isOnlyBookmarkShown}
                    ></Message>
                  ))
              : messages
                  .filter((message) => message.anzeigen === true)
                  .reverse()
                  .filter((message) => {
                    const bereich = message.bereich.join().toLowerCase()
                    const wohnung = message.wohnung.toLowerCase()
                    const etage = message.etage.toLowerCase()
                    const raumbezeichnung = message.raumbezeichnung.toLowerCase()
                    const number = String(message.number)
                    const query = searchedWord
                    return (
                      query === '' ||
                      bereich.includes(query) ||
                      wohnung.includes(query) ||
                      raumbezeichnung.includes(query) ||
                      etage.includes(query) ||
                      number.includes(query)
                    )
                  })
                  .filter((message) => {
                    const datumMonth = message.datum.slice(5, 7)
                    const queryMonth = selectedMonth
                    return queryMonth === '' || datumMonth.includes(queryMonth)
                  })
                  .filter((message) => {
                    const datumYear = message.datum.slice(2, 4)
                    const queryYear = selectedYear
                    return queryYear === '' || datumYear.includes(queryYear)
                  })
                  .map((message, index) => (
                    <Message
                      message={message}
                      key={index}
                      handleDelete={handleDelete}
                      handleStatus={handleStatus}
                      updateBookmarks={!isOnlyBookmarkShown}
                    ></Message>
                  ))
            : ''}

          {isClicked2
            ? messagesNotice
                .filter((messageNotice) => messageNotice.anzeigen === true)
                .filter((messageNotice) => {
                  const absender = messageNotice.name.toLowerCase()
                  const beschreibung = messageNotice.beschreibung.toLowerCase()
                  const query = searchedWord2
                  return (
                    query === '' ||
                    absender.includes(query) ||
                    beschreibung.includes(query)
                  )
                })
                .filter((messageNotice) => {
                  const datumMonth = messageNotice.datum.slice(5, 7)
                  const queryMonth = selectedMonth3
                  return queryMonth === '' || datumMonth.includes(queryMonth)
                })
                .filter((messageNotice) => {
                  const datumYear = messageNotice.datum.slice(2, 4)
                  const queryYear = selectedYear3
                  return queryYear === '' || datumYear.includes(queryYear)
                })
                .reverse()
                .map((messageNotice, index) => (
                  <MessageNotice
                    messageNotice={messageNotice}
                    key={index}
                    index={index}
                    handleDeleteNotice={handleDeleteNotice}
                  ></MessageNotice>
                ))
            : ''}
          {isClicked3
            ? messagesTuev
                .filter((messageTuev) => messageTuev.anzeigen === true)
                .filter((messageTuev) => {
                  const nummer = String(messageTuev.nummer)
                  const ort = messageTuev.ort.toLowerCase()
                  const query = searchedWordFilter2
                  return (
                    query === '' ||
                    nummer.includes(query) ||
                    ort.includes(query)
                  )
                })
                /* .filter((messageTuev) => {
                  const status = String(messageTuev.status)
                  const beschreibung = messageTuev.beschreibung.toLowerCase()
                  const query = selectedStatus
                  return (
                    query === '' ||
                    status.includes(query) ||
                    beschreibung.includes(query)
                  )
                }) */
                .sort(function (a, b) {
                  return a.nummer - b.nummer
                })
                .map((messageTuev, index) => (
                  <MessageTuev
                    messageTuev={messageTuev}
                    key={index}
                    handleDeleteTuev={handleDeleteTuev}
                    //handleStatusTuev={handleStatusTuev}
                  ></MessageTuev>
                ))
            : ''}
        </MessageWrapper2>
      </MessageWrapper>
    </Grid>
  )
}

const MessageWrapper = styled.div`
  overflow-y: scroll;
  width: 100%;
  background-color: ${(props) => (props.active ? 'white' : '')};
  opacity: ${(props) => (props.active ? '10%' : '')};
  @media (min-width: 768px) {
    grid-column: 1/3;
  }
`
const MessageWrapper2 = styled.div`
  padding-bottom: 30px;
  @media (min-width: 768px) {
    grid-column: 1/3;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
