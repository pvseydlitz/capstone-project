import React from 'react'
import styled from 'styled-components/macro'
import Headline from './Headline2'
import AcceptButton from './AcceptButton'

export default function acceptance({ handleAccept }) {
  return (
    <Wrapper>
      <Grid onSubmit={handleAccept}>
        <Headline>Information zum Schadenmeldeformular</Headline>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          dolor autem, quasi repellendus distinctio doloribus eligendi iusto
          saepe atque quae aut tempore incidunt totam sunt deleniti facere
          nostrum ex sapiente? Minus id itaque cupiditate, rem eveniet corrupti
          voluptas illum! Ipsam, nam? Sit vero, nemo praesentium quidem
          exercitationem suscipit quos eveniet.
        </Text>
        <AcceptButton></AcceptButton>
        <Button>Zum Formular</Button>
      </Grid>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 20px;
`
const Grid = styled.form`
  display: grid;
  grid-template-rows: 2fr auto 1fr 1fr;
  grid-gap: 20px;
  margin-top: 50px;
`
const Text = styled.p`
  border: solid 2px rgb(107, 107, 107);
  padding: 5px;
  margin: 0;
  color: rgb(107, 107, 107);
  font-size: 14px;
`
const Button = styled.button`
  all: unset;
  padding: 4px 24px;
  border-radius: 5px;
  font-size: 16px;
  background: rgb(201 193 171);
  color: rgb(253 252 251);
  display: flex;
  justify-content: center;
`
