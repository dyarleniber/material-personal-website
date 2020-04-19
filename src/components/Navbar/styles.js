import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Navigation = styled.nav`
  display: flex;
  padding: 25px 45px;
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const ToggleButtonWrapper = styled.div`
  @media (min-width: 720px) {
    display: none;
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const NavigationItems = styled.div`
  display: flex;
  align-items: center;
  height: 24px;

  @media (max-width: 719px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const Item = styled.li`
  margin: 0px 20px;
`;

export const MenuLink = styled(Link)`
  color: ${(props) =>
    props.active
      ? props.theme.colors.text.active
      : props.theme.colors.text.default} !important;
  font-size: 15px;
  padding: 5px 10px;
  box-shadow: none !important;
  text-decoration: none !important;

  &:hover,
  &:active {
    font-weight: bold;
  }
`;
