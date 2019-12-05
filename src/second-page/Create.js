import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Header from '../Header'
import Footer from '../Footer'
import Grid from '../Grid'
import FormTUV from './FormTUV'
import Form from './Form'
import Globalstyles from '../Globalstyles'
import DropDown from './DropdownMenu'

export default function Create({ onSubmit }) {
  /* const [b1IsClicked, setB1IsClicked] = useState(false)
  const [b2IsClicked, setB2IsClicked] = useState(false) */

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

  const Button = styled.input``
  const Label = styled.label``
  /* border: 1px solid black;
    border-radius: 0.5em;
    padding: 0.5em; 
  `
  function handleClick1() {
    setB1IsClicked(true)
    setB2IsClicked(false)
  }
  function handleClick2() {
    setB1IsClicked(false)
    setB2IsClicked(true)
  } */
  const [selected, setSelected] = useState()
  function handleChange(event) {
    setSelected(event.target.value)
  }
  return (
    <Grid>
      <Globalstyles></Globalstyles>
      <Header></Header>
      <Wrapper style={{ overflowY: 'scroll' }}>
        <Headline>Neue Meldung erstellen</Headline>
        <DropDown
          /* handleClick1={handleClick1}
          handleClick2={handleClick2} */
          handleChange={handleChange}
          selected={selected}
        ></DropDown>
        {selected === 'Gewährleistungsmangel' ? (
          <Form onSubmit={onSubmit}></Form>
        ) : (
          ''
        )}
        {selected === 'Tüv-Mangel' ? (
          <FormTUV onSubmit={onSubmit}></FormTUV>
        ) : (
          ''
        )}
      </Wrapper>

      <Footer></Footer>
    </Grid>
  )
}

/* <div>
          <Label for="b1" onClick={handleClick1}>
            <Button type="radio" id="b1" value="b1" />
            Schadenmeldung
          </Label>
        </div>
        <div>
          <Label for="b2" onClick={handleClick2}>
            <Button type="radio" id="b2" value="b2" />
            TÜV-Mangel
          </Label>
        </div>
        <div>
          <Label for="b3 ">
            <Button type="radio" id="b3" value="b3" />
            Ankündigung
          </Label>
        </div> */
