import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { IconButton, CardMedia } from "@material-ui/core";

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

class PokeCard extends React.Component {
  constructor(props) {
    super(props)

    this.fetchAPI = this.fetchAPI.bind(this);
    this.state = {imgUrl:"", TypeList:"", MoreInfo:[]};
  }
  
  async fetchAPI() {

    const response = await fetch(this.props.url);
    const responseJSON = await response.json();
    // console.log(responseJSON);
    this.setState ({
      imgUrl: responseJSON.sprites.front_default,
      TypeList: responseJSON.types.map(type => type.type.name),
      MoreInfo: responseJSON

    
    });
  }

  componentDidMount() {
    this.fetchAPI();
  }

  render () {
    //Vars
    let name = capitalize(this.props.name);
    let subheader = capitalize(this.state.TypeList[0])
    if(this.state.TypeList.length === 2){
      subheader += ", " + capitalize(this.state.TypeList[1]);
    }
    let wikiLink = "https://bulbapedia.bulbagarden.net/wiki/"+this.props.name+"_(Pok%C3%A9mon)"

    return (
      <Card>
        <CardHeader
          title={name}
          subheader={subheader}
        />
        <CardMedia style={{ height: "100px" }} image={this.state.imgUrl} />
        <CardActions>
          <Button size="small" href={wikiLink}>MORE INFO</Button>
        </CardActions>
      </Card>
    );
  }
}

export default PokeCard;