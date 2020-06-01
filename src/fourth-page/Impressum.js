import React from 'react'
import styled from 'styled-components/macro'

import Globalstyles from '../general/Globalstyles'
import Grid from '../general/Grid2'
import Header from '../general/Header2'

export default function Impressum() {
  return (
    <Grid>
      <Globalstyles></Globalstyles>
      <Header></Header>
      <Wrapper>
        <Headline>Kontakt</Headline>
        <Text>
          Wenn Sie Ihr Passwort vergessen haben oder Ihnen technische Probleme
          an der Anwendung aufgefallen sind, schreiben Sie gerne eine E-Mail an:{' '}
          <Link href="mailto:app@langenfelderdamm.de">
            app@langenfelderdamm.de
          </Link>
          .
        </Text>
      </Wrapper>
    </Grid>
  )
}
const Wrapper = styled.section`
  margin: 0 20px;
`
const Headline = styled.h1`
  color: rgb(187 179 163);
  font-size: 21px;
  font-weight: bold;
`
const Text = styled.p`
  font-size: 16px;
  margin: 0;
  color: rgb(107, 107, 107);
`
const Link = styled.a`
  color: rgb(107, 107, 107);
`

//REACT_APP_URL = "http://192.168.0.143:3000"
