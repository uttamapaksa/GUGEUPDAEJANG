import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vh;
  height: 20vh;
  border-radius: 1vh;
  z-index: 200;
  background-color: white;
  box-shadow: 0 0 5vh 2vh rgba(0, 0, 0, 0.2);
`;

export const Title = styled.div`
  /* border: 3px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vh;
  width: 100%;
  height: 35%;
`;
