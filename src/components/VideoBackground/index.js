import React from "react";
import PropTypes from "prop-types";

import { Video, Overlay, Content } from "./styles";
import videPoster from "../../assets/images/code320.jpg";
import videoSrc from "../../assets/videos/code320.mp4";

const VideoBackground = ({ children }) => {
  return (
    <>
      <Video playsInline autoPlay muted loop poster={videPoster}>
        <source src={videoSrc} type="video/mp4" />
      </Video>
      <Overlay />
      <Content>{children}</Content>
    </>
  );
};

VideoBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VideoBackground;
