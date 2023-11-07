import styled from "styled-components";
import theme from "/src/styles";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 5%;
  position: fixed;
  background-color: ${theme.color.white};
  z-index: 10001;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
`;

export const HeaderHospitalLogo = styled.div`
  position: absolute;
  display: flex;
  text-align: center;
  justify-content: center;
  height: 70%;
  top: 50%;
  right: 1%;
  transform: translate(0, -50%);
  cursor: pointer;
`;

export const MenuBox = styled.div`
  display: flex;
  position: absolute;
  background-color: ${theme.color.white};
  border-radius: 1px;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  height: 30px;
  width: 90px;
  top: 80%;
  right: 1%;
`
export const Item = styled.div`
  color: ${theme.color.black};
  width: 100%;
  height: 100%;
  font-size: ${theme.font.Small5_12};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
