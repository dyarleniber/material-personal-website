import React from "react";

import VideoBackground from "../../components/VideoBackground";
import {
  Container,
  Image,
  Title,
  Description,
  Email,
  List,
  Item,
} from "./styles";
import defaultprofilepic from "../../assets/images/defaultprofilepic.jfif";
import { ReactComponent as GithubLogo } from "../../assets/icons/github.svg";
import { ReactComponent as LinkedinLogo } from "../../assets/icons/linkedin.svg";
import { ReactComponent as InstagramLogo } from "../../assets/icons/instagram.svg";
import { ReactComponent as DevLogo } from "../../assets/icons/dev.svg";

function Home() {
  const title = "Dyarlen Iber";
  const description =
    "Full-Stack Developer | JavaScript | Node.js | MongoDB | React | PHP | Laravel | MySQL";
  const email = "dyarlen1@gmail.com";

  return (
    <VideoBackground>
      <Container>
        <Image src={defaultprofilepic} alt="Profile" />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Email>{email}</Email>
        <List>
          <Item>
            <a
              href="https://github.com/dyarleniber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo />
            </a>
          </Item>
          <Item>
            <a
              href="https://www.linkedin.com/in/dyarleniber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo />
            </a>
          </Item>
          <Item>
            <a
              href="https://www.instagram.com/dyarleniber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo />
            </a>
          </Item>
          <Item>
            <a
              href="https://dev.to/dyarleniber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DevLogo />
            </a>
          </Item>
        </List>
      </Container>
    </VideoBackground>
  );
}

export default Home;
