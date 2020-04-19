import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 285px;
  height: 100%;
  background: ${(props) => props.theme.colors.background};
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  transform: translateX(${(props) => (props.toggle ? "0" : "-100%")});
`;

export const Content = styled.div`
  position: relative;
  overflow: auto;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: block;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  padding: 25px 45px;
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Close = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  font-size: 25px;
  cursor: pointer;
`;

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  margin: 0 0 16px;
`;

export const MenuLink = styled(Link)`
  color: ${(props) =>
    props.active
      ? props.theme.colors.text.active
      : props.theme.colors.text.default} !important;
  font-size: 15px;
  box-shadow: none !important;
  text-decoration: none !important;

  &:hover,
  &:active {
    font-weight: bold;
  }
`;
