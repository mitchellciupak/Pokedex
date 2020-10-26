import React from 'react';
import { Container, Grid } from '@material-ui/core';
import AppBar from "./components/AppBar.js"
import Content from "./components/Content.js"

function App() {

  return (
    <Container fixed>
      <AppBar />
      <Grid item xs={12} sm={4} md={3}>
        <Content />
      </Grid>
    </Container>
  )
}

export default App;