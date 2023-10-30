import styled from "styled-components";
import theme from "/src/styles";

export const ParamedicDetailContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${theme.color.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 10001;
  top: 0%;
  left: 100%;
`;
export const ParamedicDetailContent = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 3px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

export const CloseDiv = styled.div`
  position: absolute;
  width: 20px;
  height: 100px;
  top: 50%;
  right: -20px;
  border-radius: 0 5px 5px 0;
  background-color: ${theme.color.fontGrey5};
  transform: translate(0, -50%);
  z-index: 10001;
  `;