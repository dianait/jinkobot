import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const ButtonStyled = styled.button`
  color: white;
  width: 50vh;
  margin-left: 1rem;
  height: 3.9rem;
  background: #ff8008;
  border: none;
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;
  outline: none;
  border-radius: 30px;
  font-size: 1.4rem;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 10px 1px lightgray;
  }
`;
