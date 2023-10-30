import styled from "styled-components";
import theme from "/src/styles";

export const SidebarContainer = styled.div`
  width: 50px;
  height: 100%;
  padding-top: 6vh;
  position: fixed;
  background-color: ${theme.color.fontGrey4};
  z-index: 10000;
`;