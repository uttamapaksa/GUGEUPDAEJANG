import * as S from './HospitalItem.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';

function HospitalItem() {
  return (
    <S.HospitalItem>
      <S.LeftSection>
        <S.ItemTitle>연세대학교 의과대학 강남세브란스 병원</S.ItemTitle>
        <S.ItemNumber>
          <A.ImgCellphoneGray $width="2vh" $margin="0 1.8vh 0 0" />
          02-2602-3024
        </S.ItemNumber>
        <S.ItemDist>3.4km</S.ItemDist>
        <S.ItemTime>13분</S.ItemTime>
      </S.LeftSection>
      <S.RightSection>
        <S.ItemCallTime>10시 18분에 요청</S.ItemCallTime>
        <A.BtnToggle
          $width="90%"
          $height="8vh"
          $fontSize="2.2vh"
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
