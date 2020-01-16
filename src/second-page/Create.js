import React, { useState } from 'react'
import styled from 'styled-components/macro'

import Globalstyles from '../general/Globalstyles'
import Grid from '../general/Grid2'
import Header from '../general/Header2'
import Headline2 from './Headline2'
import DropDown from './DropdownMenu'
import Acceptance from './Acceptance'
import Form from './Form'
import FormTuev from './FormTuev'
import FormNotice from './FormNotice'
import Footer from '../general/Footer'

export default function Create({ onSubmit1, onSubmit2, onSubmit3 }) {
  const [selected, setSelected] = useState('Gewährleistungsmangel')
  const [showAcceptance, setShowAcceptance] = useState(true)

  function handleChange(event) {
    setSelected(event.target.value)
  }
  return (
    <Grid>
      <Globalstyles></Globalstyles>
      <Header showSearchIcon={false}></Header>
      <Wrapper style={{ overflowY: 'scroll' }}>
        <Headline>Neue Meldung erstellen</Headline>
        <Category>
          <Headline2>Kategorie der Meldung</Headline2>
          <DropDown handleChange={handleChange} selected={selected}></DropDown>
        </Category>
        {selected === 'Gewährleistungsmangel' ? (
          showAcceptance ? (
            <Acceptance
              handleAccept={() => {
                setShowAcceptance(false)
              }}
            ></Acceptance>
          ) : (
            <Form onSubmit1={onSubmit1}></Form>
          )
        ) : (
          ''
        )}
        {selected === 'Tüv-Mangel' ? (
          <FormTuev onSubmit2={onSubmit2}></FormTuev>
        ) : (
          ''
        )}
        {selected === 'Allgemeines' ? (
          <FormNotice onSubmit3={onSubmit3}></FormNotice>
        ) : (
          ''
        )}
      </Wrapper>
      <Footer></Footer>
    </Grid>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`
const Headline = styled.h1`
  color: rgb(187 179 163);
  font-size: 21px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  margin: 0 20px;
`
const Category = styled.div`
  display: grid;
  grid-template-rows: 32px 32px;
  position: absolute;
  top: 55px;
  margin: 0 20px;
`
