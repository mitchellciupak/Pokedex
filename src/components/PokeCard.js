import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import { IconButton, CardMedia } from "@material-ui/core";

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

class PokeCard extends React.Component {
  constructor(props) {
    super(props)

    this.fetchAPI = this.fetchAPI.bind(this);
    this.state = {imgUrl:"", TypeList:""};
  }
  
  async fetchAPI() {

    const response = await fetch(this.props.url);
    const responseJSON = await response.json();
    console.log(responseJSON);
    this.setState ({
      imgUrl: responseJSON.sprites.front_default,
      TypeList: responseJSON.types.map(type => type.type.name)

    
    });
  }

  componentDidMount() {
    this.fetchAPI();
  }

  render () {
    // console.log(this.state.TypeList);
    //Vars
    let name = capitalize(this.props.name);
    let subheader = capitalize(this.state.TypeList[0]) + ", " + capitalize(this.state.TypeList[1]);

    return (
      <Card>
        <CardHeader
          title={name}
          subheader={subheader}
        />
        <CardMedia style={{ height: "100px" }} image={this.state.imgUrl} />
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