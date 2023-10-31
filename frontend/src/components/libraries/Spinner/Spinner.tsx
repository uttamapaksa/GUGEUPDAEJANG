import * as S from './Spinner.style'

interface SpinnerProps {
  height?: string;
  width?: string;
}

function Spinner ({width, height}: SpinnerProps) {
  const processedWidth = width? width.replace('px', ''):""
  const processedHeight = height? height.replace('px', ''):""
  
  return (
    <S.SpinnerWrapper width={width} height={height}>
      <S.SpinnerInner width={processedWidth}  height={processedHeight}>
        <div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div>
      </S.SpinnerInner>
    </S.SpinnerWrapper>
  );
}

export default Spinner;
