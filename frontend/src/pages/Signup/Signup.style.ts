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

export const SignupInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 3px solid green;
  height: 75%;
`;

// atoms
export const ImgLogo = styled.div`
  border: 3px solid purple;
  width: 50%;
  height: 60%;
`;

export const Row1 = styled.div`
  display: flex;
  border: 3px solid skyblue;
  width: 90%;
  height: 13%;
`;

export const Row2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid skyblue;
  width: 90%;
  height: 5%;
`;

export const IptUserInfo = styled.div`
  border: 3px solid purple;
  width: 70%;
  height: 100%;
`;

export const BtnSubmit = styled.div`
  margin-left: auto;
  border: 3px solid purple;
  width: 25%;
  height: 100%;
`;

export const LoginToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid purple;
  height: 100%;
`;