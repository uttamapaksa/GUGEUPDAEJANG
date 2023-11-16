import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 3px solid green; */
  margin-bottom: 8vh;
  height: 16vh;
`;

export const BtnGoToGuest = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 2vh;
  border: none;

  width: 80%;
  height: 80%;
  color: #ffffff;
  font-size: 3vh;
  background-color: #393d50;

  @media (max-width: 500px) {
    font-size: 2.2vh;
  }

  cursor: pointer;
`;