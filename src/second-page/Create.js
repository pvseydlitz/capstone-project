import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Header from '../Header'
import Footer from '../Footer'
import Grid from '../Grid'
import FormTUV from './FormTUV'
import Form from './Form'
import Globalstyles from '../Globalstyles'

export default function Create({ onSubmit }) {
  const [b1IsClicked, setB1IsClicked] = useState(false)
  const [b2IsClicked, setB2IsClicked] = useState(false)

  const Buttons = styled.div`
    display: flex;
    flex-direction: column;
  `
  const Button = styled.input``
  const Label = styled.label`
    /* border: 1px solid black;
    border-radius: 0.5em;
    padding: 0.5em; */
  `
  function handleClick1() {
    setB1IsClicked(true)
    setB2IsClicked(false)
  }
  function handleClick2() {
    setB1IsClicked(false)
    setB2IsClicked(true)
  }

  return (
    <Grid>
      <Globalstyles></Globalstyles>
      <Header></Header>
      <Buttons style={{ overflowY: 'scroll' }}>
        <div>
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
        </div>
        {b1IsClicked ? <Form onSubmit={onSubmit}></Form> : ''}
        {b2IsClicked ? <FormTUV onSubmit={onSubmit}></FormTUV> : ''}
      </Buttons>

      <Footer></Footer>
    </Grid>
  )
}
/* .toggle-buttons input[type="radio"]{
  visibility:hidden;
}
.toggle-buttons label {
border: 1px solid #333;
border-radius: 0.5em;
padding: 0.5em;
}

.toggle-buttons input:checked + label {
background: #ebf5d7;
color: #5a9900;
box-shadow: none;
} */
