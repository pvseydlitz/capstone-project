import React, { useState } from 'react'
import styled from 'styled-components/macro'

import Password from '../first-page/Password'

import cross from '../icons/cross.svg'
import download from '../icons/download.svg'

const URL = process.env.REACT_APP_URL.replace('3000', '3333')

export default function Card({ deleteFile, file }) {
  const [showInputPassword, setShowInputPassword] = useState(false)
  function saveEvent(event) {
    localStorage.setItem('id', event.target.id)
  }
  var d = new Date(file.uploadDate)
  return (
    <CardLayout key={file.index}>
      <a
        href={`${URL}/api/files/${file.filename}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', width: '250px', marginRight: '50px' }}
      >
        <Grid>
          <FileName>{file.filename}</FileName>
          <img alt="" src={download}></img>
        </Grid>
      </a>
      <DateText>
        Hinzugefügt am:
        {` ${d.toLocaleDateString()} ${d.toLocaleTimeString()}`}
      </DateText>
      <Cross
        src={cross}
        onClick={event => {
          saveEvent(event)
          setShowInputPassword(true)
        }}
        id={file._id}
      ></Cross>
      {showInputPassword ? (
        <Password
          text={'Passwort eingeben zum Löschen'}
          passwordApproved={deleteFile}
          hidePassword={() => setShowInputPassword(false)}
        ></Password>
      ) : (
        ''
      )}
    </CardLayout>
  )
}
const CardLayout = styled.section`
  margin: 30px 20px;
  padding: 10px 20px;
  position: relative;
  background: rgb(238, 238, 238);
  border-radius: 10px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  align-items: center;
  max-width: 250px;
`
const FileName = styled.p`
  margin: 0;
  color: rgb(107, 107, 107);
  font-size: 16px;
`
const Cross = styled.img`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
`
const DateText = styled.p`
  margin-top: 20px;
  color: rgb(107, 107, 107);
  font-size: 14px;
`
