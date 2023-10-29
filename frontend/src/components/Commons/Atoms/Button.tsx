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
  color: ${theme.color.white};
  font-size: ${(props) => props.$fontSize ? 
  `${props.$fontSize}` : `${theme.font.Medium3_23};`};
  font-weight: 600;
  border-radius: 10px;
  
`

export const BtnParaState = styled(StyledButton)`
  flex-direction: column;
  padding: 2%;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.25);
`

export const BtnKtas = styled(StyledButton)`
  font-size: ${theme.font.Medium5_20};
  font-weight: 900;

  background-color: ${theme.color.ktas1_Active}; 

  color: ${(props) => 
    props.$ktas && ["3", "5"].includes(props.$ktas?.slice(4)) ? 
    props.$IsClick ? `${theme.color.black}`:`${theme.color.fontGrey1}` :
    `${theme.color.white}`};

  border-radius: ${(props) => 
    props.$ktas?.slice(4) === "1" ? "20px 0px 0px 20px":
    props.$ktas?.slice(4) === "5" ? "0px 20px 20px 0px":""};

  background-color: ${(props) =>
    props.$ktas && props.$IsClick ? theme.color[`${props.$ktas}_Active`] :
    props.$ktas && !props.$IsClick ? theme.color[`${props.$ktas}_Deactive`]:""};
`

export const BtnToggle = styled(StyledButton)`
  font-size: ${(props) => 
    props.$fontSize ? `${props.$fontSize}` : ` ${theme.font.Medium2_24}`};
  border-radius: ${(props) => 
    props.$borderRadius ? `${props.$borderRadius}` : "20px"};
  border: ${(props) => `3px solid ${props.$border}`};
  flex-direction: column;

  ${(props) =>
    props.$IsClick && 
    css`
      color: ${theme.color.white};
      background-color: ${theme.color.grayDarkest};
      box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.20);
  `}
`

export const BtnMediaRecord = styled(StyledButton)`
  justify-content: space-around;
  font-size: ${theme.font.Large3_32};
  background-color: transparent;
  border: ${(props) => `3px solid ${props.$border}`};
  border-radius: 20px;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.10);
`