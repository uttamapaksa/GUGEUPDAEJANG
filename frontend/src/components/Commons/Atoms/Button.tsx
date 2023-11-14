import styled, {css} from "styled-components"
import theme from "/src/styles";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  $ktas?:
    | "ktas1"
    | "ktas2"
    | "ktas3"
    | "ktas4"
    | "ktas5"
  $height?: string;
  $width?: string;
  $margin?: string;
  $padding?: string;
  $border?: string;
  $borderRadius?: string;
  $boxSizing?: string;
  $boxShadow?: string;

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

  $IsClick? : boolean;
}

const StyledButton = styled.button<ButtonProps>`
  height: ${(props) => props.$height || "100%"};
  width: ${(props) => props.$width || "100%"};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  border: ${(props) => props.$border || "0px"};
  border-radius: ${(props) => props.$borderRadius};
  box-sizing: ${(props) => props.$boxSizing};
  box-shadow: ${(props) => props.$boxShadow};

  color: ${(props) => props.$color};
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
  text-align: ${(props) => props.$textAlign};
  line-height: ${(props) => props.$lineHeight};
  background-color: ${(props) => props.$backgroundColor || `${theme.color.white}`};

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

  cursor: pointer;
`

export const BtnSubmit = styled(StyledButton)`
  color: ${(props) => props.$color || theme.color.white};
  font-size: ${(props) => props.$fontSize ? 
  `${props.$fontSize}` : `${theme.font.Medium3_23};`};
  font-weight: 600;
`

export const BtnParaState = styled(StyledButton)`
  position: relative;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 47.5%;
  padding: 4vh;
  border-radius: 2vh;
  box-shadow: 0 0 1vh 0.4vh rgba(0, 0, 0, 0.1);
  ${(props) =>
    props.$IsClick && 
    css`
      color: ${theme.color.white};
      background-color: ${theme.color.grayDarkest};
      box-shadow: 0 0 1vh 0.4vh rgba(0, 0, 0, 0.25);
  `}
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
`

export const BtnKtas = styled(StyledButton)`
  height: 7vh;
  font-size: 1.5vh;
  font-weight: 900;
  background-color: ${theme.color.ktas1_Active}; 
  color: ${(props) => 
    props.$ktas && ["3", "5"].includes(props.$ktas?.slice(4)) ? 
    props.$IsClick ? `${theme.color.black}`:`${theme.color.fontGrey1}` :
    `${theme.color.white}`};
  background-color: ${(props) =>
    props.$ktas && props.$IsClick ? theme.color[`${props.$ktas}_Active`] :
    props.$ktas && !props.$IsClick ? theme.color[`${props.$ktas}_Deactive`]:""};
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
`
  
  export const BtnToggle = styled(StyledButton)`
  font-size: ${(props) => props.$fontSize || `${theme.font.Medium2_24}`};
  border-radius: ${(props) => props.$borderRadius || "20px"};
  border: ${(props) => `3px solid ${props.$border}`};
  flex-direction: column;
  
  ${(props) =>
    props.$IsClick && 
    css`
      color: ${theme.color.white};
      background-color: ${theme.color.grayDarkest};
      box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.20);
      `}
  
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  `

export const BtnMediaRecord = styled(StyledButton)`
  justify-content: ${(props) => props.$justifyContent || `space-around`};
  align-items: center;
  font-size: ${(props) => props.$fontSize || `${theme.font.Large3_32}`};
  background-color: transparent;
  border: ${(props) => `3px solid ${props.$border}`};
  border-radius: ${(props) => props.$borderRadius || `20px`};
  box-shadow: ${(props) => props.$boxShadow || `0px 0px 10px 4px rgba(0, 0, 0, 0.10)`};
`