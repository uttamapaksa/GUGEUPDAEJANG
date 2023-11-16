import * as S from './Spinner.style'

interface SpinnerProps {
  height?: string;
  width?: string;
  top?: string;
  color?: string;
  position?: string;
}

function Spinner ({width, height, top, color, position}: SpinnerProps) {
  const processedWidth = width? width.replace('vh', ''):""
  const processedHeight = height? height.replace('vh', ''):""
  
  return (
    <S.SpinnerWrapper width={width} height={height} top={top} position={position}>
      <S.SpinnerInner width={processedWidth} height={processedHeight} color={color}>
        <div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div>
      </S.SpinnerInner>
    </S.SpinnerWrapper>
  );
}

export default Spinner;
