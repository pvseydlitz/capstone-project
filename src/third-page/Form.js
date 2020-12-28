import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import plus from '../icons/plus-file.svg'

export default function Form({
  uploadFile,
  fileChanged,
  picture,
  handleShowForm,
  showForm,
}) {
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
  return (
    <Wrapper className="App" active={showForm}>
      <Headline>Dokumente</Headline>
      {userAdmin ? <Plus src={plus} onClick={handleShowForm}></Plus> : ''}
      {showForm ? (
        <UploadForm>
          <UploadWrapper>
            <Headline2 style={{ color: 'rgb(253 252 251)' }}>
              PDF auswählen
            </Headline2>
            <input
              style={{ display: 'none' }}
              type="file"
              onChange={(event) => fileChanged(event)}
              accept=".pdf"
              required
            />
          </UploadWrapper>
          <ChoosenPicture>
            <em style={{ fontSize: '12px' }}>{picture}</em>
          </ChoosenPicture>
          <Button
            /* onClick={() => {
              setShowInputPassword(true)
            }} */
            onClick={() => uploadFile()}
          >
            <Headline2>PDF hochladen</Headline2>
          </Button>
        </UploadForm>
      ) : (
        <UnderHeadline>
          Hier werden Dokumente veröffentlicht, die die ganze Hausgemeinschaft
          betreffen. Diese können mit einem Klick auf den Dokumentnamen
          heruntergeladen werden.
        </UnderHeadline>
      )}
    </Wrapper>
  )
}
Form.propTypes = {
  showForm: PropTypes.bool,
  picture: PropTypes.string,
}

const Wrapper = styled.div`
  position: relative;
  margin: 20px;
  height: ${(props) => (props.active ? '112px' : '112px')};
  @media (min-width: 768px) {
    grid-column: 1/3;
  }
`
const Headline = styled.h1`
  color: rgb(187 179 163);
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 0;
`
const Plus = styled.img`
  position: absolute;
  top: 0;
  right: 20px;
  cursor: pointer;
`
const UploadForm = styled.section`
  display: grid;
  grid-template-rows: 25px 20px;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 5px;
  justify-items: center;
  position: absolute;
  right: 20px;
  top: 50px;
`
const UploadWrapper = styled.label`
  background: rgb(201 193 171);
  padding: 4px 10px;
  border-radius: 5px;
`
const Headline2 = styled.h2`
  margin: 0;
  color: rgb(253 252 251);
  font-size: 14px;
  cursor: pointer;
`
const ChoosenPicture = styled.p`
  grid-row-start: 2;
  margin: 0;
  color: rgb(107, 107, 107);
  font-size: 14px;
`
const Button = styled.button`
  grid-column-start: 2;
  all: unset;
  background: rgb(201 193 171);
  padding: 4px 10px;
  border-radius: 5px;
  cursor: pointer;
`
const UnderHeadline = styled.h3`
  color: rgb(107, 107, 107);
  font-size: 16px;
  padding: 0 15px;
  text-align: center;
`
