import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Header from '../Header'
import Footer from '../Footer'
import Grid from '../Grid'
import FormTuev from './FormTuev'
import Form from './Form'
import Globalstyles from '../Globalstyles'
import DropDown from './DropdownMenu'

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
  const Headline2 = styled.h2`
    margin: 0;
    color: rgb(107, 107, 107);
    font-size: 18px;
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
          <DropDown
            /* handleClick1={handleClick1}
          handleClick2={handleClick2} */
            handleChange={handleChange}
            selected={selected}
          ></DropDown>
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
