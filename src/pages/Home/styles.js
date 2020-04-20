import styled from "styled-components";

export const Container = styled.div`
  text-align: center;

  div,
  ul {
    margin: 15px auto;
    margin-bottom: 0;
  }

  * {
    color: ${(props) => props.theme.colors.text.active};
    box-shadow: none;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

export const Image = styled.img`
  width: 180px;
  height: 180px;
  padding: 20px;
  margin: 0 auto;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 50%;
`;

export const Title = styled.div`
  max-width: 220px;
  font-size: 22px;
`;

export const Description = styled.div`
  max-width: 320px;
  font-size: 15px;
`;

export const Email = styled.div`
  max-width: 320px;
  font-size: 12px;
  font-weight: bold;
`;

export const List = styled.ul`
  display: inline-flex;
  list-style: none;
`;

export const Item = styled.li`
  display: list-item;
  position: relative;
  margin-right: 20px;

  a {
    font-size: 22px;

    svg:hover {
      -webkit-filter: invert(0.75);
      filter: invert(0.75);
    }
  }
`;
