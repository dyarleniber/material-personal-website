import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const Line = styled.div`
  width: 30px;
  height: 2px;
  background: ${(props) => props.theme.colors.text.active};
`;
