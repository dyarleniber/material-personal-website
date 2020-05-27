import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import useStyles from "./styles";

const PersonalData = ({ name, description, profilePicture, socialMedias }) => {
  const classes = useStyles();

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
      <Grid container className={classes.socialmedia} spacing={1}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={1}>
            <Grid item>
              <IconButton aria-label="email">
                <FontAwesomeIcon icon={faEnvelope} />
              </IconButton>
            </Grid>
            {socialMedias.map((socialMedia) => (
              <Grid item key={socialMedia.name}>
                <IconButton aria-label={socialMedia.name}>
                  <FontAwesomeIcon icon={["fab", socialMedia.name]} />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

PersonalData.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  socialMedias: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PersonalData;
