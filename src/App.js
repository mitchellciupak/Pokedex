import React from 'react';
import { Button, Container } from '@material-ui/core';
import AppBar from "./components/AppBar.js"

function App() {
  return (
    <Container fixed>
      <AppBar />
      <Button color="primary" variant="contained">Hello World</Button>
    </Container>
  )
}
  

export default App;
