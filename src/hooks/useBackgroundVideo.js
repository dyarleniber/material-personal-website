import { useState, useEffect } from "react";

import videPoster240 from "../assets/images/code240.jpg";
import videPoster320 from "../assets/images/code320.jpg";
import videPoster480 from "../assets/images/code480.jpg";
import videPoster720 from "../assets/images/code720.jpg";
import videoSource240 from "../assets/videos/code240.mp4";
import videoSource320 from "../assets/videos/code320.mp4";
import videoSource480 from "../assets/videos/code480.mp4";
import videoSource720 from "../assets/videos/code720.mp4";

function useBackgroundVideo() {
  const [videPoster, setVidePoster] = useState();
  const [videoSource, setVideoSource] = useState();

  useEffect(() => {
    const { innerWidth: width } = window;

    if (width > 1280) {
      setVidePoster(videPoster720);
      setVideoSource(videoSource720);
    } else if (width > 720) {
      setVidePoster(videPoster480);
      setVideoSource(videoSource480);
    } else if (width > 480) {
      setVidePoster(videPoster320);
      setVideoSource(videoSource320);
    } else {
      setVidePoster(videPoster240);
      setVideoSource(videoSource240);
    }
  }, []);

  return { videPoster, videoSource };
}

export default useBackgroundVideo;
