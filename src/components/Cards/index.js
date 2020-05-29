import React, { memo } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faCode } from "@fortawesome/free-solid-svg-icons";

import useStyles from "./styles";
import * as types from "./constants";

const Cards = ({ name, description, type, technologies, homepage, github }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media}>
          <Avatar className={classes.avatar}>
            {type === types.FRONTEND_TYPE ? (
              <FontAwesomeIcon icon={faDesktop} />
            ) : (
              <FontAwesomeIcon icon={faCode} />
            )}
          </Avatar>
          <Typography gutterBottom variant="overline" component="h6">
            {type}
          </Typography>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container justify="flex-start" spacing={1}>
          {technologies.map((technologie) => (
            <Grid item key={technologie}>
              <Chip label={technologie} color="primary" />
            </Grid>
          ))}
        </Grid>
      </CardActions>
      <CardActions>
        {homepage && (
          <Button size="small" color="primary" target="_blank" href={homepage}>
            Homepage
          </Button>
        )}
        {github && (
          <Button size="small" color="primary" target="_blank" href={github}>
            Source code
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

Cards.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.oneOf([types.FRONTEND_TYPE, types.BACKEND_TYPE]).isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
  homepage: PropTypes.string,
  github: PropTypes.string,
};

export default memo(Cards);
