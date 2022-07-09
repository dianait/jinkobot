import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 0;
  padding: 0;
`;

export const ContainerRutines = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const ContainerRobot = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
`;

export const Camera = styled.div`
  width: 600px;
  height: 400px;
  margin: 0 auto;
  border: 1px solid #cecece;
  border-radius: 5px;
  box-shadow: 1px 1px 1px #cecece;
`;

export const Title = styled.h1`
  font-size: 2rem;
  width: 310px;
  margin-top: 2rem;
  margin-bottom: 0;
`;

export const ImageRobot = styled.img`
  position: fixed;
  top: 15vh;
  right: 10vh;
  width: 500px;
`;

export const TextQuestions = styled.p`
  padding: 0.3em;
  font-size: 1.2rem;
`;
