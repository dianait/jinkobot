import styled from 'styled-components';

export const Container = styled.section`
  background-color: #ff8008;
  min-width: 33vh;
  box-shadow: 8px 1px 10px #b5d2d3;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

export const Item = styled.a`
  color: white;
  font-family: 'Anek Latin', sans-serif !important;
  font-size: 1.7rem;
  font-family: 'Staat';
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
export const MenuStyled = styled.ul`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 3rem;
  list-style: none;
  align-items: center;
  margin: 0;
  padding: 1.5rem;
  margin: 0 auto;
`;
export const ImageStyled = styled.img`
  width: 3rem;
  margin: 0.4rem;
`;
