import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { personalData } from "../../config/dataApi";
import useStyles from "./styles";
import ButtonLink from "../ButtonLink";

function PersonalData() {
  const classes = useStyles();

  const {
    greeting,
    name,
    description,
    email,
    profilePicture,
    socialMedias,
  } = personalData;

  return (
    <div className={classes.root}>
      <Avatar
        alt="Profile picture"
        src={profilePicture}
        className={classes.avatar}
      />
      <Grid container className={classes.text}>
        <Grid item xs={12}>
          <Typography variant="h2">{`${greeting} ${name}`}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">{description}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="button">{email}</Typography>
        </Grid>
        <Grid item xs={12}>
          <IconButton aria-label="email" component="a" href={`mailto:${email}`}>
            <FontAwesomeIcon icon={faEnvelope} />
          </IconButton>
          {socialMedias.map((socialMedia) => (
            <IconButton
              key={socialMedia.name}
              aria-label={socialMedia.name}
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href={socialMedia.url}
            >
              <FontAwesomeIcon icon={["fab", socialMedia.name]} />
            </IconButton>
          ))}
        </Grid>
        <Grid item xs={12}>
          <ButtonLink to={"/portfolio"} primary={"See my portfolio"} />
        </Grid>
      </Grid>
    </div>
  );
}

export default PersonalData;
