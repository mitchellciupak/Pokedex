import React from 'react';
import { Grid } from "@material-ui/core";
import PokeCard from "./PokeCard.js"

import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

class Content extends React.Component {
    constructor(props) {
        super(props)
        
        this.fetchAPI = this.fetchAPI.bind(this);
        this.state = {pokemon: [], offset:0};
    }

    async fetchAPI(offset) {
        let search = "pikachu";
        let searching = false;

        let limit = 24;
        let url = "https://pokeapi.co/api/v2/pokemon?limit="+limit+"&offset="+offset;
        if(searching === true){
            url = "https://pokeapi.co/api/v2/pokemon/"+{search};
        }
        const response = await fetch(url);
        const responseJSON = await response.json();
        const responsePokemon = responseJSON.results.map(pokeObj => this.getPokeCard(pokeObj));
        this.setState({pokemon: responsePokemon});
    }

    componentDidMount() {
         this.fetchAPI(this.state.offset);
    }

    getPokeCard(pokeObj){
        return (
            <Grid item xs={12} sm={4} md={3} >
                <PokeCard name={pokeObj.name} url={pokeObj.url} />
            </Grid>
            );
    }

    updateOffset() {
        let rand = parseInt((Math.floor(Math.random() * 893) - 24));
        this.setState({offset: rand});
        this.fetchAPI(rand);
    }

    render () {
        return (
            <Grid container spacing={2} justify="center">
              {this.state.pokemon}
              <br></br>
              <CardActions>
                <Button variant="contained" color="primary" size="large" onClick={() => { this.updateOffset(); }}>MORE POKEMON</Button>
              </CardActions>
            </Grid>
          );
    }

}

export default Content;