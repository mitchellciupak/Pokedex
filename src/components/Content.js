import React from 'react';
import { Grid } from "@material-ui/core";
import PokeCard from "./PokeCard.js"

class Content extends React.Component {
    constructor(props) {
        super(props)
        
        this.fetchAPI = this.fetchAPI.bind(this);
        this.state = {pokemon: []};
    }

    async fetchAPI() {
        
        let search = "pikachu";
        let searching = false;

        let limit = 10;
        let offset = 0;
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
         this.fetchAPI();
    }

    getPokeCard(pokeObj){
        return (
            <Grid item xs={12} sm={4} md={3} >
                <PokeCard name={pokeObj.name} url={pokeObj.url} />
            </Grid>
            );
    }

    render () {
        return (
            <Grid container spacing={2}>
              {this.state.pokemon}
            </Grid>
          );
    }

}

export default Content;