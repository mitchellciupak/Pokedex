import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import { IconButton, CardMedia } from "@material-ui/core";

class PokeCard extends React.Component {
  constructor(props) {
    super(props)
    
    this.fetchAPI = this.fetchAPI.bind(this);
    this.state = {pokemonData: []};
  }
  
  async fetchAPI() {

    const response = await fetch(this.props.url);
    const responseJSON = await response.json();
    this.setState({pokemonData: responseJSON});
  }

  componentDidMount() {
    this.fetchAPI();
  }

  render () {
    // console.log(this.state.pokemonData);
    //Vars
    let name = this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1);
    let subheader = "Grass, Poison"
    // let subheader = this.state.pokemonData.types.map(type => {
    //   return (
    //       <div>
    //           {type.type.name}
    //       </div>
    //   )
    // });

    return (
      <Card>
        <CardHeader
          title={name}
          subheader={subheader}
        />
        <CardMedia style={{ height: "100px" }} image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"} />
        <CardActions>
          <Button size="small">More Info</Button>
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default PokeCard;