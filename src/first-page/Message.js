import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

import ShowMoreButton from './ShowMoreButton'
import Bookmark from './Bookmark'
import cross from '../icons/cross.svg'
import DropdownMenu from './DropdownMenu'
import Password from './Password'

export default function Message({ message, handleStatus, handleDelete }) {
  const [showContent, setShowContent] = useState(false)
  const [showInputPassword, setShowInputPassword] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  useEffect(() => {
    setBookmarks()
  })
  function handleChangeDropdown(number) {
    message.status = number
    handleStatus(message)
  }
  function saveMessageId(id) {
    localStorage.setItem('id', id)
  }
  function setBookmarks() {
    getBookmarkedMessages().then((bookmarkedMessages) =>
      bookmarkedMessages.forEach(() => {
        if (bookmarkedMessages.indexOf(message._id) !== -1) {
          setIsBookmarked(true)
          message.isBookmarked = true
        }
      })
    )
  }

  function bookmarkMessage(id) {
    getBookmarkedMessages().then((bookmarkedMessages) => {
      if (bookmarkedMessages.indexOf(id) === -1) {
        bookmarkedMessages.push(id)
        changeBookmarkedMessages(bookmarkedMessages).then(() => {
          setIsBookmarked(true)
          message.isBookmarked = true
        })
      } else {
        const index = bookmarkedMessages.indexOf(message._id)
        bookmarkedMessages.splice(index, 1)
        changeBookmarkedMessages(bookmarkedMessages).then(() => {
          setIsBookmarked(false)
          message.isBookmarked = false
        })
      }
    })
  }

  async function getBookmarkedMessages() {
    const user = localStorage.getItem('user')
    let bookmarkedMessages = await fetch(
      `/registration/allData/${user}`
    ).then((res) => res.json())
    return bookmarkedMessages
  }

  async function changeBookmarkedMessages(bookmarkedMessages) {
    const data = { bookmarked_messages: bookmarkedMessages }
    const user = localStorage.getItem('user')
    return await fetch(`/registration/allData/${user}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    }).then((res) => res.json())
  }

  return (
    <MessageLayout active={showContent}>
      <Bookmark
        onClick={() => bookmarkMessage(message._id)}
        active={isBookmarked}
      ></Bookmark>
      <Cross
        src={cross}
        onClick={() => {
          setShowInputPassword(true)
          saveMessageId(message._id)
        }}
      ></Cross>
      <Headline>Gewährleistungsmangel</Headline>

      <Wrapper active={!showContent}>
        <b>
          <p
            style={{
              margin: '0',
              color: 'rgb(107, 107, 107)',
              fontSize: '16px',
            }}
          >
            Ort des Schadens:
          </p>
        </b>
        <Description>{message.bereich.join(', ')}</Description>
        <Description>
          {message.wohnung}, {message.raumbezeichnung}
        </Description>
        <Description>
          <b>Datum: </b>
          {message.datum.slice(8, 10)}.{message.datum.slice(5, 7)}.
          {message.datum.slice(0, 4)}
        </Description>
        <WrapperDropdown>
          <Description>
            <b>Status:</b>
          </Description>
          <DropdownMenu
            handleChangeDropdown={handleChangeDropdown}
            selected={message.status}
            showValue0={true}
          ></DropdownMenu>
        </WrapperDropdown>

        {/* <b>
          <p
            style={{
              margin: '0',
              color: 'rgb(107, 107, 107)',
              fontSize: '16px',
            }}
          >
            {showContent ? 'Wer hat den Schaden gemeldet?' : ''}
          </p>
        </b>
        <Description>{showContent ? message.name : ''}</Description>
        <Description>{showContent ? message.telefonnummer : ''}</Description>
        <Description>{showContent ? message.email : ''}</Description> */}
        {showContent ? (
          <Description>
            <br></br>
            <b>Mangel Beschreibung</b>
          </Description>
        ) : (
          ''
        )}
        <Content>
          <br></br>
          {showContent ? message.beschreibung : ''}
        </Content>
        {showContent ? (
          <Link href={message.url} rel="noopener noreferrer" target="_blank">
            <Image src={message.url} alt=""></Image>
          </Link>
        ) : (
          ''
        )}
      </Wrapper>

      <ShowMoreButton onClick={() => setShowContent(!showContent)}>
        {showContent ? 'Weniger anzeigen' : 'Mehr anzeigen'}
      </ShowMoreButton>
      {showInputPassword ? (
        <Password
          text={'Passwort eingeben zum Löschen'}
          passwordApproved={handleDelete}
          hidePassword={() => setShowInputPassword(false)}
        ></Password>
      ) : (
        ''
      )}
    </MessageLayout>
  )
}

const MessageLayout = styled.div`
  margin: 50px 20px;
  margin-top: 10px;
  padding: 10px 20px;
  position: relative;
  max-height: ${(props) => (props.active ? '700px' : '265px')};
  background: rgb(238, 238, 238);
  border-radius: 10px;
  @media (min-width: 768px) {
    margin: 50px 8%;
    margin-top: 20px;
  }
`
const Cross = styled.img`
  position: absolute;
  right: 20px;
  top: 28px;
  cursor: pointer;
`
const Headline = styled.h2`
  margin-bottom: 10px;
  font-size: 20px;
  color: rgb(187 179 163);
`
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: ${(props) =>
    props.active ? 'repeat(5, 30px) 16px' : 'repeat(6, 30px) auto auto 29px'};
`
const Description = styled.p`
  margin: 0;
  font-size: 16px;
  color: rgb(107, 107, 107);
`
const Content = styled.p`
  margin: 0;
  font-size: 16px;
  color: rgb(107, 107, 107);
`
const WrapperDropdown = styled.div`
  display: grid;
  grid-template-columns: auto 3fr 1fr;
  grid-gap: 20px;
`
const Link = styled.a`
  justify-self: center;
`
const Image = styled.img`
  margin-top: 20px;
  width: 200px;
  height: auto;
`
