import React from 'react'

import Globalstyles from '../Globalstyles'
import Grid from '../Grid2'
import Header from '../Header2'
import Footer from '../Footer'
import Home from './Home'

export default function Upload() {
  return (
    <Grid>
      <Globalstyles></Globalstyles>
      <Header showSearchIcon={true}></Header>
      <Home></Home>
      <Footer></Footer>
    </Grid>
  )
}
