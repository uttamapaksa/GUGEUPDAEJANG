import styled from 'styled-components';

// templates
export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* border: 3px solid black; */
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* border: 3px solid red;   */
  width: 60vh;  
  padding-left: 1vh;
  padding-right: 1vh;
  height: 60vh;
  padding-top: 20vh;
  padding-bottom: 20vh;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 3px solid orange; */
  width: 100%;
  height: 100%;
`;

// molecules
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 3px solid green; */
  height: 20%;
`;

export const GoToGuest = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 3px solid green; */
  height: 25%;
`;

export const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* border: 3px solid green; */
  height: 35%;
`;

// atoms
export const BtnGoToGuest = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;
  width: 80%;
  height: 80%;
  color: #ffffff;
  background-color: #393d50;
  font-size: 2.5vh;
  @media (max-height: 1000px) {
    font-size: 2.2vh;
  }
`;

export const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 3px solid skyblue; */
  width: 90%;
  height: 28%;
`;

export const Row2 = styled.div`
  display: flex;
  justify-content: center;
  /* border: 3px solid skyblue; */
  width: 85%;
  height: 11%;
`;

export const LoginToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 3px solid purple; */
  height: 100%;
  font-size: 2vh;
  @media (max-height: 1000px) {
    font-size: 1.5vh;
  }
`;
