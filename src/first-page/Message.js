import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import ShowMoreButton from './ShowMoreButton'
import Bookmark from './Bookmark'
import cross from '../icons/cross.svg'
import DropdownMenu from './DropdownMenu'
import Password from './Password'

export default function Message({
  message,
  handleStatus,
  handleDelete,
  updateBookmarks,
}) {
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
        } else {
          message.isBookmarked = false
          setIsBookmarked(false)
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

  function deleteBookmarkedMessage() {
    getBookmarkedMessages().then((bookmarkedMessages) => {
      if (bookmarkedMessages.indexOf(message._id) !== -1) {
        const index = bookmarkedMessages.indexOf(message._id)
        bookmarkedMessages.splice(index, 1)
        changeBookmarkedMessages(bookmarkedMessages)
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
  if (updateBookmarks === true) {
    setBookmarks()
  }
  return (
    <MessageLayout active={showContent}>
      <Bookmark
        onClick={() => bookmarkMessage(message._id)}
        bookmarked={isBookmarked}
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
        <Description>
          <b>Bereich:</b> {message.bereich.join(', ')}
        </Description>
        <Description>
          <b>Etage & Wohnung:</b> {message.etage}
          {message.wohnung !== '' ? `, Wohnung ${message.wohnung}` : ''}{' '}
        </Description>
        <Description>
          <b>Raum:</b> {message.raumbezeichnung}
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
      </Wrapper>
      {showContent ? (
        <Wrapper>
          <b>
            <p
              style={{
                margin: '0',
                color: 'rgb(107, 107, 107)',
                fontSize: '16px',
              }}
            >
              Wer hat den Schaden gemeldet?
            </p>
          </b>
          <Description>
            <b>Name:</b> {message.name}
          </Description>
          <Description>
            <b>Telefonnummer:</b> {message.telefonnummer}{' '}
          </Description>
          <Description>
            <b>E-Mail Adresse:</b> {message.email}{' '}
          </Description>
          <Description>
            <br></br>
            <b>Mangel Beschreibung</b>
          </Description>
          <Content>{message.beschreibung}</Content>
          <Link href={message.url} rel="noopener noreferrer" target="_blank">
            <Image src={message.url} alt=""></Image>
          </Link>
        </Wrapper>
      ) : (
        ''
      )}

      <ShowMoreButton onClick={() => setShowContent(!showContent)}>
        {showContent ? 'Weniger anzeigen' : 'Mehr anzeigen'}
      </ShowMoreButton>
      {showInputPassword ? (
        <Password
          text={'Passwort eingeben zum Löschen'}
          passwordApproved={handleDelete}
          hidePassword={() =>
            setShowInputPassword(false) + deleteBookmarkedMessage()
          }
        ></Password>
      ) : (
        ''
      )}
    </MessageLayout>
  )
}
Message.propTypes = {
  updateBookmarks: PropTypes.bool,
}

const MessageLayout = styled.div`
  margin: 50px 20px;
  margin-top: 10px;
  padding: 10px 20px;
  position: relative;
  background: rgb(238, 238, 238);
  border-radius: 10px;
  @media (min-width: 768px) {
    max-height: ${(props) => (props.active ? '' : '330px')};
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
  grid-template-rows: repeat(7, auto);
  grid-gap: 15px;
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
  margin: 10px 0;
`
const Link = styled.a`
  justify-self: center;
`
const Image = styled.img`
  margin-top: 20px;
  width: 200px;
  height: auto;
`
