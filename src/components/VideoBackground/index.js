import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { Video, Overlay, Content } from "./styles";

const VideoBackground = ({ children }) => {
  /*
   * Media query of the resource's intended media; this should be used only in a <picture> element
   *
   * Extra large devices (large laptops and desktops, 1200px and up)
   * Large devices (laptops/desktops, 992px and up)
   * Medium devices (landscape tablets, 768px and up)
   * Small devices (portrait tablets and large phones, 600px and up)
   * Extra small devices (phones, 600px and down)
   */
  async function loadVideo() {
    const { width } = getWindowDimensions();

    let posterPromise;
    let srcPromise;

    if (width > 1280) {
      posterPromise = import("../../assets/images/code720.jpg");
      srcPromise = import("../../assets/videos/code720.mp4");
    } else if (width > 720) {
      posterPromise = import("../../assets/images/code480.jpg");
      srcPromise = import("../../assets/videos/code480.mp4");
    } else if (width > 480) {
      posterPromise = import("../../assets/images/code320.jpg");
      srcPromise = import("../../assets/videos/code320.mp4");
    } else {
      posterPromise = import("../../assets/images/code240.jpg");
      srcPromise = import("../../assets/videos/code240.mp4");
    }

    const [{ default: poster }, { default: src }] = await Promise.all([
      posterPromise,
      srcPromise,
    ]);

    return {
      poster,
      src,
    };
  }

  /*
   * It returns the width of a window's content area
   */
  function getWindowDimensions() {
    const { innerWidth: width } = window;

    return {
      width,
    };
  }

  const [video, setVideo] = useState({});

  useEffect(() => {
    async function handleResize() {
      setVideo(await loadVideo());
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return (
    <>
      <Video playsInline autoPlay muted loop poster={video.poster}>
        <source src={video.src} type="video/mp4" />
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
