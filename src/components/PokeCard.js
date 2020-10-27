import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import { IconButton, CardMedia } from "@material-ui/core";

const PokeCard = props => {
  const { name, url, subtitle, description, imageUrl } = props;
  return (
    <Card>
      <CardHeader
        title={name}
        subheader={subtitle}
        url={url}
      />
      <CardMedia style={{ height: "100px" }} image={imageUrl} />
      <CardContent>
        <Typography variant="body4" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More Info</Button>
        <IconButton aria-label="settings">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PokeCard;