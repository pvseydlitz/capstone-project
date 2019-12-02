import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Grid from '../Grid'
import Form from './Form'
import Globalstyles from '../Globalstyles'

export default function Create() {
  return (
    <Grid>
      <Globalstyles></Globalstyles>
      <Header></Header>
      <Form></Form>
      <Footer></Footer>
    </Grid>
  )
}
