import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  border: 3px solid black;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: 3px solid red;
  width: 50vh;
  padding-left: 5vh;
  padding-right: 5vh;
  height: 60vh;
  padding-top: 20vh;
  padding-bottom: 20vh;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 3px solid orange;
  width: 100%;
  height: 100%;
`;

export const Logo = styled.div`
  border: 3px solid green;
  height: 20%;
`;

export const GoToGuest = styled.div`
  border: 3px solid green;
  height: 25%;
`;

export const LoginInput = styled.div`
  border: 3px solid green;
  height: 35%;
`;
