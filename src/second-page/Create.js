import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Grid from '../Grid'
import Globalstyles from '../Globalstyles'
import Header from '../Header'
import Headline2 from './Headline2'
import DropDown from './DropdownMenu'
import Form from './Form'
import FormTuev from './FormTuev'
import Footer from '../Footer'

export default function Create({ onSubmit1, onSubmit2 }) {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0 20px;
  `
  const Headline = styled.h1`
    color: rgb(187 179 163);
    font-size: 21px;
    font-weight: bold;
    position: absolute;
    top: 10px;
    margin: 0;
  `
  const Category = styled.div`
    display: grid;
    grid-template-rows: 32px 32px;
    position: absolute;
    top: 55px;
  `
  const [selected, setSelected] = useState('Gewährleistungsmangel')
  function handleChange(event) {
    setSelected(event.target.value)
  }
  return (
    <Grid>
      <Globalstyles></Globalstyles>
      <Header></Header>
      <Wrapper style={{ overflowY: 'scroll' }}>
        <Headline>Neue Meldung erstellen</Headline>
        <Category>
          <Headline2>Kategorie der Meldung</Headline2>
          <DropDown handleChange={handleChange} selected={selected}></DropDown>
        </Category>
        {selected === 'Gewährleistungsmangel' ? (
          <Form onSubmit1={onSubmit1}></Form>
        ) : (
          ''
        )}
        {selected === 'Tüv-Mangel' ? (
          <FormTuev onSubmit2={onSubmit2}></FormTuev>
        ) : (
          ''
        )}
      </Wrapper>
      <Footer></Footer>
    </Grid>
  )
}
