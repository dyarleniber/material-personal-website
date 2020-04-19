import styled from "styled-components";

export const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  z-index: 1;
  background-image: linear-gradient(to right, #cdcdcd, #f5f5f5);
  opacity: 0.75;
`;

export const Content = styled.div`
  z-index: 2;
  position: relative;
  display: inline-block;
  margin-top: 120px;
  margin-bottom: 30px;
  width: 325px;
  color: #000;
  width: 100%;
`;
