import styled from "styled-components";
import theme from "/src/styles";

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20vh;
  height: 20vh;
  background-color: white;
  border-radius: 50%;
  filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.4));
  
  @keyframes scaleAnimation {
    0%, 100% {
      transform: scale(0.94);
    }
    50% {
      transform: scale(1);
    }
  }

  animation: scaleAnimation 3s infinite;
`

export const Time = styled.div`
  font-size: 1.8vh;
  color: ${theme.color.grayDarkest};
`