import React from "react";

import VideoBackground from "../../components/VideoBackground";
import PersonalData from "../../components/PersonalData";

const Home = (props) => {
  return (
    <VideoBackground>
      <PersonalData {...props} />
    </VideoBackground>
  );
};

export default Home;
