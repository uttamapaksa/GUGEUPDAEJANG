import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* border: 3px solid green; */
  height: 40%;
`;

export const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 3px solid skyblue; */
  width: 90%;
  height: 23%;
`;

export const Row2 = styled.div`
  display: flex;
  justify-content: center;
  /* border: 3px solid skyblue; */
  width: 85%;
  height: 10%;
`;

export const LoginToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 3px solid purple; */
  width: 40%;
  height: 100%;
  font-size: 2vh;
  @media (max-width: 500px) {
    font-size: 1.8vh;
    width: 48%;
  }
  cursor: pointer;
`;