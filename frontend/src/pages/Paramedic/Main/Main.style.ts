import styled from 'styled-components';

// templates
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

// molecules
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid green;
  height: 20%;
`;

export const Blank = styled.div`
  display: flex;
  border: 3px solid green;
  height: 5%;
`;

export const CallWaitToggle = styled.div`
  display: flex;
  justify-content: space-between;
  border: 3px solid green;
  height: 40%;
`;

export const GoToHistory = styled.div`
  display: flex;
  border: 3px solid green;
  height: 10%;
`;

// atoms
export const ImgLogo = styled.div`
  border: 3px solid purple;
  width: 50%;
  height: 60%;
`;

export const BtnParaState = styled.div`
  border: 3px solid purple;
  width: 47.5%;
`;
