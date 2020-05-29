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

const PersonalData = () => {
  const classes = useStyles();

  const {
    name,
    description,
    email,
    profilePicture,
    socialMedias,
  } = personalData;

  return (
    <div className={classes.paper}>
      <Avatar
        alt="profile picture"
        src={profilePicture}
        className={classes.avatar}
      />
      <Typography variant="h5" gutterBottom>
        {name}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {description}
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        {email}
      </Typography>
      <Grid container className={classes.socialmedia} spacing={1}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={1}>
            <Grid item>
              <IconButton
                aria-label="email"
                component="a"
                href={`mailto:${email}`}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </IconButton>
            </Grid>
            {socialMedias.map((socialMedia) => (
              <Grid item key={socialMedia.name}>
                <IconButton
                  aria-label={socialMedia.name}
                  target="_blank"
                  component="a"
                  href={socialMedia.url}
                >
                  <FontAwesomeIcon icon={["fab", socialMedia.name]} />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ButtonLink
            variant="outlined"
            to={"/portfolio"}
            primary={"See my portfolio"}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default PersonalData;
