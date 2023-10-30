import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const ContentBox = styled.div`
  position: absolute;
  bottom: 0px;
  height: 45vh;
  width: 600px;

  display: flex;
  justify-content: center;
  border-radius: 30px 30px 0px 0px;
  background-color: white;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);

  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
`