import React from 'react';
import { Button, Container } from '@material-ui/core';
import AppBar from "./components/AppBar.js"
import Grid from "./components/Grid.js"
import Demo3 from "./components/Demo3.js"

function App() {
  
  return (
    <Container fixed>
      <AppBar />
      <Grid />
      <Demo3 />
      <Button color="primary" variant="contained">Hello World</Button>
    </Container>
  )
}

export default App;
