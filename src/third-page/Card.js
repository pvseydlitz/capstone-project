import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

import cross from '../icons/cross.svg'
import download from '../icons/download.svg'

const URL = process.env.REACT_APP_URL.replace('3000', '3333')

export default function Card({ deleteFile, file }) {
  useEffect(() => {
    checkUser()
  })
  const [userAdmin, setUserAdmin] = useState(false)
  function checkUser() {
    const userRole = localStorage.getItem('role')
    if (userRole === 'true') {
      setUserAdmin(true)
    }
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
      {userAdmin ? (
        <Cross
          src={cross}
          onClick={(event) => {
            deleteFile(event.target.id)
          }}
          id={file._id}
        ></Cross>
      ) : (
        ''
      )}
    </CardLayout>
  )
}
const CardLayout = styled.section`
  margin: 30px 20px;
  padding: 20px;
  position: relative;
  background: rgb(238, 238, 238);
  border-radius: 10px;
  max-height: 124px;
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
  top: 20px;
  right: 20px;
  cursor: pointer;
`
const DateText = styled.p`
  margin-top: 20px;
  color: rgb(107, 107, 107);
  font-size: 14px;
  margin: 0;
`
