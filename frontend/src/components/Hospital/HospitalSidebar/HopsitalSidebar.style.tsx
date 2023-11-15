import styled from "styled-components";
import theme from "/src/styles";

export const SidebarContainer = styled.div`
  width: 50px;
  height: 100%;
  padding-top: 6vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.color.fontGrey4};
  z-index: 10000;
`;

export const SidebarContent = styled.div`
  width: 100%;
  aspect-ratio: 1;
  position: relative;
`;

export const SidebarHoverContent = styled.div`
  position: absolute;

  bottom: 2px;
  left: 50%;
  padding: 1px;
  transform: translate(-50%, 0);
  width: max-content;
  height: 15px;
  border: 1px solid white;
  border-radius: 5px;
  background-color: rgb(57, 61, 80, 0.8);
  color: white;
  font-size: ${theme.font.Small6_11};

  animation: fadeout 0.5s none 1;

  @keyframes fadeout {
    0% {
      bottom: -5px;
      opacity: 0;
    }

    100% {
      bottom: 1px;
      opacity: 1;
    }
  }
`;
