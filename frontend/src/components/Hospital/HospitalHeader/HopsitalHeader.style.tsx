import styled from "styled-components";
import theme from "/src/styles";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 5%;
  position: fixed;
  background-color: ${theme.color.white};
  z-index: 10001;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);;
`;