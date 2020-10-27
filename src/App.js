import React from 'react';
import { Container } from '@material-ui/core';
import AppBar from "./components/AppBar.js"
import Content from "./components/Content.js"
import Footer from "./components/Footer.js"

function App() {

  return (
    <Container fixed>
      <AppBar />
      <br></br>
      <Content/>
      <br></br>
      <Footer />
      <br></br>
    </Container>
  )
}

export default App;