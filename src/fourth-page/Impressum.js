import React, { useState } from 'react'
import styled from 'styled-components/macro'

import Globalstyles from '../general/Globalstyles'
import Grid from '../general/Grid2'
import Header from '../general/Header2'

import checkTime from '../general/checkTime.js'
import Texte from './Text.json'

export default function Impressum() {
  const [backgroundWhite, setBackgroundWhite] = useState(false)

  return (
    <Grid onMouseEnter={() => checkTime()}>
      <Globalstyles></Globalstyles>
      <Header
        backgroundInvisible={() => setBackgroundWhite(!backgroundWhite)}
      ></Header>
      <Wrapper id="wrapper" active={backgroundWhite}>
        <Margin>
          <Headline>{Texte[0].headline}</Headline>
          <Text style={{ lineHeight: '20px' }}>
            {Texte[0].text}
            <Link href="mailto:app@langenfelderdamm.de">{Texte[0].mail}</Link>.
          </Text>
          <Headline>{Texte[1].headline}</Headline>
          <Headline2>{Texte[1].headline2}</Headline2>
          <Text>
            {Texte[1].kontakt[0]}
            <br />
            {Texte[1].kontakt[1]}
            <br />
            {Texte[1].kontakt[2]} <br />
            {Texte[1].kontakt[3]} <br />
            <Link href="mailto:info@aussenalster.de">
              {Texte[1].kontakt[4]}
            </Link>{' '}
            <br />
            <br />
            {Texte[1].kontakt[5]}
            <br />
            {Texte[1].kontakt[6]}
            <br />
            {Texte[1].kontakt[7]}
            <br />
            {Texte[1].kontakt[8]}
            <br />
            <br />
            <strong>{Texte[2].headline}</strong> <br />
            {Texte[2].text}
            <Link
              href="https://webgate.ec.europa.eu/odr/main/index.cfm?event=main.home.show&lng=DE"
              target="_blank"
            >
              {Texte[2].link}
            </Link>
            <br />
            <br />
            <strong>{Texte[3].headline}</strong> <br />
            {Texte[3].text}
          </Text>
        </Margin>
      </Wrapper>
    </Grid>
  )
}
const Wrapper = styled.section`
  background-color: ${(props) => (props.active ? 'white' : '')};
  opacity: ${(props) => (props.active ? '10%' : '')};
  overflow-y: scroll;
  @media (min-width: 768px) {
    grid-column: 1/3;
  }
`
const Margin = styled.div`
  margin: 0 5%;
`
const Headline = styled.h1`
  color: rgb(187 179 163);
  font-size: 21px;
  font-weight: bold;
`
const Headline2 = styled.h2`
  color: rgb(107 107 107);
  font-size: 19px;
  font-weight: normal;
`
const Text = styled.p`
  font-size: 16px;
  margin: 0;
  color: rgb(107, 107, 107);
  line-height: 26px;
`
const Link = styled.a`
  color: rgb(107, 107, 107);
`

//1230px maximal Breite, dann Hintergrund rgb(242, 242, 242)
//Texte als JSON Datei
