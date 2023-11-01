import * as S from './HospitalItem.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';

function HospitalItem() {
  return (
    <S.HospitalItem>
      <S.LeftSection>
        <S.Title>연세대학교 의과대학 강남세브란스 병원</S.Title>
        <S.Number>
          <A.ImgCellphoneGray 
            $width="2.6vw" 
            $margin="0 1.8vh 0 0" />
          02-2602-3024
        </S.Number>
        <S.Dist>3.4km</S.Dist>
        <S.Time>13분</S.Time>
      </S.LeftSection>

      <S.RightSection>
        <S.CallTime>10시 18분에 요청</S.CallTime>
        <A.BtnToggle
          $width="90%"
          $height="8vh"
          $fontSize="2.2vh"
          $borderRadius='1vh'
          $color={theme.color.pinkLight}
          $border={`0.25vh solid ${theme.color.pinkLight}`}
        >
          요청 취소
        </A.BtnToggle>
      </S.RightSection>
    </S.HospitalItem>
  );
}
export default HospitalItem;
