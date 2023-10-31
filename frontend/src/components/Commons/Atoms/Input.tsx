import styled from "styled-components"
import theme from "/src/styles";

interface InputProps {
  children?: React.ReactNode;
  onClick?: () => void;

  $height?: string;
  $width?: string;
  $margin?: string;
  $padding?: string;
  $border?: string;
  $borderRadius?: string;
  $boxSizing?: string;

  $color?: string;
  $fontSize?: string;
  $fontWeight?: string;
  $textAlign?: string;
  $lineHeight?: string;
  $backgroundColor?: string;
  $boxShadow?: string;


  $position?: string;
  $float?: string;
  $top?: string;
  $bottom?: string;
  $right?: string;
  $left?: string;
  $zIndex?: string;
  
  $display?: string;
  $flexDirection?: string;
  $justifyContent?: string;
  $justifyItems?: string;
  $alignContent?: string;
  $alignItems?: string;
}

const StyledInput = styled.input<InputProps>`
  height: ${(props) => props.$height || "100%"};
  width: ${(props) => props.$width || "100%"};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  border: ${(props) => props.$border};
  border-radius: ${(props) => props.$borderRadius};
  box-sizing: ${(props) => props.$boxSizing};

  color: ${(props) => props.$color};
  font-size: ${(props) => props.$fontSize || "2vh"};
  font-weight: ${(props) => props.$fontWeight};
  text-align: ${(props) => props.$textAlign};
  line-height: ${(props) => props.$lineHeight};
  background-color: ${(props) => props.$backgroundColor};
  box-shadow: ${(props) => props.$boxShadow || '0px 0px 0.3vh 0.3vh rgba(0, 0, 0, 0.10)'};

  position: ${(props) => props.$position};
  float: ${(props) => props.$float};
  top: ${(props) => props.$top};
  bottom: ${(props) => props.$bottom};
  right: ${(props) => props.$right};
  left: ${(props) => props.$left};
  z-index: ${(props) => props.$zIndex};

  display: ${(props) => props.$display};
  flex-direction: ${(props) => props.$flexDirection};
  justify-content: ${(props) => props.$justifyContent};
  justify-items: ${(props) => props.$justifyItems};
  align-content: ${(props) => props.$alignContent};
  align-items: ${(props) => props.$alignItems};
`

export const IptUserInfo = styled(StyledInput)`
  color: ${theme.color.fontGrey2};
  padding-left: 5%;
  border-radius: 1vh;
  border: 0px;
`