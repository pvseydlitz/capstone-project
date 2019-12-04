import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Grid from '../Grid'
import Form from './Form'
import Globalstyles from '../Globalstyles'

export default function Create({ onSubmit }) {
  return (
    <Grid>
      <Globalstyles></Globalstyles>
      <Header></Header>
      <Form onSubmit={onSubmit}></Form>
      <Footer></Footer>
    </Grid>
  )
}
