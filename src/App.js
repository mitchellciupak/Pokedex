import React from 'react';
import { Container, Grid } from '@material-ui/core';
import AppBar from "./components/AppBar.js"
import Content from "./components/Content.js"
import Footer from "./components/Footer.js"

function App() {

  return (
    <Container fixed>
      <AppBar />
      <br></br>
      <Grid item xs={12} sm={4} md={3}>
        <Content />
      </Grid>
      <br></br>
      <Footer />
    </Container>
  )
}

export default App;