import React from "react";
import PropTypes from "prop-types";

import useStyles from "./styles";
import useBackgroundVideo from "../../hooks/useBackgroundVideo";

function VideoBackground({ children }) {
  const classes = useStyles();

  const { videPoster, videoSource } = useBackgroundVideo();

  return (
    <>
      <video
        playsInline
        autoPlay
        loop
        muted
        poster={videPoster}
        className={classes.video}
      >
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className={classes.overlay} />
      <div className={classes.content}>{children}</div>
    </>
  );
}

VideoBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VideoBackground;
