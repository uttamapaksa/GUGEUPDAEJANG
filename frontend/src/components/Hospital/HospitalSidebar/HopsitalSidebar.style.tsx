import styled from "styled-components";
import theme from "/src/styles";

export const SidebarContainer = styled.div`
  width: 4%;
  height: 100%;
  padding-top: 4%;
  position: fixed;
  background-color: ${theme.color.fontGrey4};
  z-index: 10000;
`;