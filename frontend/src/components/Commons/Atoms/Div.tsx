import styled from "styled-components"
import theme from "/src/styles";

interface DivProps {
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
  $borderColor?: string;
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

const StyledDiv = styled.button<DivProps>`
  height: ${(props) => props.$height || "100%"};
  width: ${(props) => props.$width || "100%"};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  border: ${(props) => props.$border || "0px"};
  border-radius: ${(props) => props.$borderRadius || "10px"};
  box-sizing: ${(props) => props.$boxSizing};
  box-Shadow: ${(props) => props.$boxShadow};

  color: ${(props) => props.$color || `${theme.color.fontGrey4}`};
  font-size: ${(props) => props.$fontSize || `${theme.font.Medium1_30}`};
  font-weight: ${(props) => props.$fontWeight};
  text-align: ${(props) => props.$textAlign};
  line-height: ${(props) => props.$lineHeight};
  background-color: ${(props) => props.$backgroundColor || `${theme.color.grayLight}`};

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

export const DivKtasInfo = styled(StyledDiv)`
  border-radius: ${(props) => props.$borderRadius || "0px 30px 0px 20px"};
  font-weight: 900;

  color: ${(props) => 
    props.$ktas && ["3", "5"].includes(props.$ktas?.slice(4)) ? 
    `${theme.color.black}`:`${theme.color.white}`};

  background-color: ${(props) =>
    props.$ktas? theme.color[`${props.$ktas}_Active`] :""};
`

export const DivTag = styled(StyledDiv)`
  box-shadow: ${(props) => props.$boxShadow || '0px 0px 4px 2px rgba(0, 0, 0, 0.10)'};
  
`

export const DivReport = styled(StyledDiv)`
  /* border: 2px solid pink; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 1vh 0.3vh rgba(0, 0, 0, 0.08);
`