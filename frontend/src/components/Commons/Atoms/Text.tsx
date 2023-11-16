import styled from "styled-components"
import theme from "/src/styles";

interface TextProps {
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

const StyledText = styled.div<TextProps>`
  height: ${(props) => props.$height || "100%"};
  width: ${(props) => props.$width || "100%"};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  border: ${(props) => props.$border};
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

  display: ${(props) => props.$display || 'flex'};
  flex-direction: ${(props) => props.$flexDirection};
  justify-content: ${(props) => props.$justifyContent || 'center'};
  justify-items: ${(props) => props.$justifyItems};
  align-content: ${(props) => props.$alignContent};
  align-items: ${(props) => props.$alignItems || 'center'};
`

export const TxtParamedicTitle = styled(StyledText)`
  justify-content: start;
  color: ${theme.color.grayDarkest};
  font-size: 2.6vh;
  font-weight: 700;
  width: 100%;
  height: 10vh;
`

export const TxtHeaderTitle  = styled(StyledText)`
  color : ${theme.color.fontGrey4};
  font-size: 2.5vh;
  font-weight: 400;
  height: 80%;
  width: ${(props) => props.$width || "50%"};
`
