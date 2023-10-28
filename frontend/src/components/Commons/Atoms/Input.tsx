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
  $borderColor?: string;
  $borderRadius?: string;
  $boxSizing?: string;

  $color?: string;
  $fontSize?: string;
  $fontWeight?: string;
  $textAlign?: string;
  $lineHeight?: string;
  $backgroundColor?: string;

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
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  margin: ${(props) => props.$margin};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  border: ${(props) => props.$border};
  border-color: ${(props) => props.$borderColor};
  border-radius: ${(props) => props.$borderRadius};
  box-sizing: ${(props) => props.$boxSizing};

  color: ${(props) => props.$color};
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
  text-align: ${(props) => props.$textAlign};
  line-height: ${(props) => props.$lineHeight};
  background-color: ${(props) => props.$backgroundColor};

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
  font-size: ${theme.font.Medium4_22};
  padding-left:15px;
  border: 0px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.10);
`