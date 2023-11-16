import styled from "styled-components";
import theme from "/src/styles";

export const GoToHistory = styled.button<{ graylight?: string }>`
  /* border: 3px solid green; */
  margin: 1.1vh auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.1vh;
  width: 100%;
  height: 8.8%;
  background-color: ${theme.color.grayLight};
  border: none;
  border-radius: 1.5vh;
  box-shadow: 0 0 0.6vh 0.2vh rgba(0, 0, 0, 0.15);
  &:hover {
    background-color: ${theme.color.grayDark}
  }
`;