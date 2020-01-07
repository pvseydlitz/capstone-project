import React from 'react'
import styled from 'styled-components/macro'

import cross from '../icons/cross.svg'
import download from '../icons/download.svg'

export default function Card({ deleteFile, file }) {
  const Card = styled.section`
    margin: 30px 0;
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
  `
  const DateText = styled.p`
    margin-top: 20px;
    color: rgb(107, 107, 107);
    font-size: 14px;
  `

  var d = new Date(file.uploadDate)
  return (
    <Card key={file.index}>
      <a
        href={`http://localhost:3333/api/files/${file.filename}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
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
        onClick={event => deleteFile(event)}
        id={file._id}
      ></Cross>
    </Card>
  )
}
