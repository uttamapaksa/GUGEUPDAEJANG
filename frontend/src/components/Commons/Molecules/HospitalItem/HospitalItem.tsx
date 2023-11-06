import { useSetRecoilState } from 'recoil';
import { showWaitState } from '/src/recoils/ParamedicAtoms';
import * as S from './HospitalItem.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';
import { CalledHospitalType } from '/src/types/paramedic';

const BTNBGCOLOR: { [key: string]: string } = {
  PENDING: theme.color.white,
  APPROVED: theme.color.pinkDrak,
  REJECTED: theme.color.grayDarkest,
  CANCELED: theme.color.grayDarkest,
};

const BTNRADCOLOR: { [key: string]: string } = {
  PENDING: theme.color.pinkLight,
  APPROVED: theme.color.pinkDrak,
  REJECTED: theme.color.grayDarkest,
  CANCELED: theme.color.grayDarkest,
};

function HospitalItem({ hospital, setHospitals }: { key: number; hospital: CalledHospitalType; setHospitals: any }) {
  const setShowWait = useSetRecoilState(showWaitState);
  const ButtonContent = (status: string) => {
    switch (status) {
      case 'APPROVED':
        return '이송 확정';
      case 'REJECTED':
        return '거절됨';
      case 'CANCELED':
        return '취소됨';
      default:
        return '요청 취소';
    }
  };
  const clickItem = (id: number, status: string) => {
    switch (status) {
      case 'APPROVED':
        return setShowWait(false);
      case 'PENDING':
        setHospitals((currentHospitals: any) =>
          currentHospitals.map((hospital: any) =>
            hospital.id === id ? { ...hospital, status: 'CANCELED' } : hospital,
          ),
        );
        return;
      default:
        return;
    }
  };

  return (
    <S.HospitalItem>
      <S.LeftSection>
        <S.Title>{hospital.hospitalId}</S.Title>
        <S.Number>
          <A.ImgCellphoneGray
            // $width="2.6vw"
            $height="65%"
            $margin="0 1.8vh 0 0"
          />
          {hospital.telephone1}
        </S.Number>
        <S.Dist>{hospital.distance.toFixed(1)}km</S.Dist>
        <S.Time>{hospital.time}분</S.Time>
      </S.LeftSection>

      <S.RightSection>
        <S.CallTime>
          {hospital.callingTime.slice(11, 13)}시 {hospital.callingTime.slice(14, 16)}분에 요청
        </S.CallTime>
        <A.BtnToggle
          onClick={() => clickItem(hospital.id, hospital.status)}
          $width="90%"
          $height="8vh"
          $fontSize="2.2vh"
          $borderRadius="1vh"
          $backgroundColor={BTNBGCOLOR[hospital.status]}
          $color={hospital.status === 'PENDING' ? theme.color.pinkLight : theme.color.white}
          $border={`0.25vh solid ${BTNRADCOLOR[hospital.status]}`}
        >
          {ButtonContent(hospital.status)}
        </A.BtnToggle>
      </S.RightSection>
    </S.HospitalItem>
  );
}
export default HospitalItem;
