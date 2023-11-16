import styled from "styled-components";
import theme from "/src/styles";

export const HospitalMainSidebarContainer = styled.div`
  min-width: 300px;
  width: 20%;
  height: 95%;
  position: fixed;
  background-color: ${theme.color.grayLight};
  z-index: 10000;
  display: flex;
  flex-direction: column;
`;

export const TypeButtonGroup = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  flex-direction: row;
`;

export const TypeButton = styled.div<{ $checked: boolean }>`
  width: 50%;
  height: 100%;
  font-size: ${theme.font.Small1_16};
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color: ${props => props.$checked ? theme.color.fontGrey4 : theme.color.fontGrey5};
  border-style: solid;
  box-sizing: border-box;
  border-width: ${props => props.$checked ? "0 0 3px" : "0 0 1px"};
  cursor: pointer;
`;

export const HospitalMainSidebarContents = styled.div`
  width: 100%;
  height: 93%;
  background-color: ${theme.color.grayLight};
  display: flex;
  flex-direction: column;
`;