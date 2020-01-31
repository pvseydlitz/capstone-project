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
          Sehr geehrte Eigentümergemeinschaft, sehr geehrte Bewohner, <br />
          <br /> im Falle eines berechtigten Sachmangels, den Sie in Ihrem
          Sondereigentum oder am Gemeinschaftseigentum feststellen, bitten wir
          Sie beigefügtes Mängelmeldeformular für Gewährleistungsmängel
          auszufüllen. <br /> <br />
          Bitte füllen Sie das Formular korrekt aus und beschreiben Sie den
          festgestellten Mangel möglichst genau, gerne auch mit entsprechenden
          Fotos dokumentiert. <br /> <br /> Bitte beachten Sie: Sollte es sich
          nicht um einen Gewährleistungsmangel handeln, sondern um einen Mangel,
          der zum Beispiel durch unsachgemäße Bedienung oder durch
          verbrauchsbedingten Verschleiß entstanden ist, muss der Antragsteller
          unter Umständen etwaige Anfahrts- oder Untersuchungskosten der
          beauftragten Firma auf Rechnung erstatten. <br /> <br /> Sobald wir
          Ihre Mängelanzeige erhalten haben, werden wir diese an die Gewerke mit
          der Aufforderung zur Mängelbeseitigung mit einer entsprechenden
          Fristsetzung – in der Regel 2 Wochen – weiterleiten. Dazu werden wir
          den entsprechenden Firmen Ihre Kontaktdaten zur Verfügung stellen,
          damit diese Termine mit Ihnen direkt vereinbaren können. <br /> <br />
          Bei weiteren Fragen stehen wir gern zur Verfügung. <br /> <br />
          Mit freundlichen Grüssen <br />
          Ihr Aussenaslter Team
        </Text>
        <AcceptButton></AcceptButton>
        <Button>Zum Formular</Button>
      </Grid>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin: 0 20px;
  position: absolute;
  top: 100px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }
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
  text-align: justify;
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
