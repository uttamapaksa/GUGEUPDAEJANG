import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { HospitalListType } from '/src/types/paramedic';
import { fixedCallingState, isTransferringState } from '/src/recoils/ParamedicAtoms';
import * as S from './HospitalItem.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';
import { cancelCalling, fixCalling } from '/src/apis/paramedic';
import { HospitalItemProps } from '/src/types/hospital';
import { occurrenceState } from '/src/recoils/ParamedicAtoms';
import Spinner from '/src/components/libraries/Spinner/Spinner';

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

const BTNCONTENT: { [key: string]: string } = {
  PENDING: '요청 취소',
  APPROVED: '이송 확정',
  REJECTED: '거절됨',
  CANCELED: '취소됨',
};

function HospitalItem({ IsGuest, hospital, guestHospital, setHospitals }: HospitalItemProps) {
  const setFixedCalling = useSetRecoilState(fixedCallingState);
  const setIsTransferring = useSetRecoilState(isTransferringState);
  const occurrence = useRecoilValue(occurrenceState);
  const [showSpinner, setShowSpinner] = useState(false);

  const clickItem = (callingId: number, status: string, hospitalId: number, latitude: number, longitude: number) => {
    if (showSpinner) return;
    setShowSpinner(true);
    switch (status) {
      case 'APPROVED':
        fixCalling(callingId).then((fixedData) => {
          setShowSpinner(false);
          if (fixedData) {
            setFixedCalling({ ...fixedData, callingId, hospitalId, latitude, longitude, videoOn: false });
            setIsTransferring(true);
          }
        });
        return;
      case 'PENDING':
        cancelCalling(callingId).then((success) => {
          setShowSpinner(false);
          if (success && setHospitals) {
            setHospitals((currHospitals: HospitalListType[]) =>
              currHospitals?.map((currHospital) =>
                currHospital.callingId === callingId ? { ...currHospital, status: 'CANCELED' } : currHospital,
              ),
            );
          }
        });
        return;
      default:
        setShowSpinner(false);
        return;
    }
  };

  return (
    <S.HospitalItem>
      <S.LeftSection>
        <S.Title>{IsGuest ? guestHospital?.name : hospital?.hospitalName}</S.Title>
        <S.Number>
          <A.ImgCellphoneGray
            // $width="2.6vw"
            $height="65%"
            $margin="0 1.8vh 0 0"
          />
          {IsGuest ? guestHospital?.telephone1 : hospital?.telephone}
        </S.Number>
        <S.Dist>{IsGuest ? guestHospital?.distance.toFixed(1) : hospital?.distance.toFixed(1)}km</S.Dist>
        <S.Time>{IsGuest ? guestHospital?.time : hospital?.duration}분</S.Time>
      </S.LeftSection>

      {IsGuest ? (
        <S.RightSection>
          <A.BtnSubmit
            $flexDirection="column"
            $justifyContent="space-between"
            $padding="1.2vh 0vh 1vh 0vh"
            $height="7.5vh"
            $width="92%"
            $color="white"
            $borderRadius="1.3vh"
            $backgroundColor={theme.color.pinkLight}
          >
            <S.HosRoomText>응급실 가용 병상</S.HosRoomText>
            <S.HosRoonCount>{guestHospital?.bedCount}</S.HosRoonCount>
          </A.BtnSubmit>
        </S.RightSection>
      ) : (
        <S.RightSection>
          <S.CallTime>
            {hospital?.callingTime.slice(11, 13)}시 {hospital?.callingTime.slice(14, 16)}분에 요청
          </S.CallTime>
          <A.BtnToggle
            onClick={() =>
              clickItem(
                hospital?.callingId,
                hospital?.status,
                hospital?.memberId,
                occurrence.latitude,
                occurrence.longitude,
              )
            }
            $position="relative"
            $width="90%"
            $height="8vh"
            $fontSize="2.2vh"
            $borderRadius="1vh"
            $backgroundColor={BTNBGCOLOR[hospital?.status]}
            $color={hospital?.status === 'PENDING' ? theme.color.pinkLight : theme.color.white}
            $border={`0.25vh solid ${BTNRADCOLOR[hospital?.status]}`}
          >
            {showSpinner ? (
              <Spinner
                width="10vh"
                height="8vh"
                position="absolute"
                top="-0.5vh"
                color={hospital?.status === 'PENDING' ? theme.color.pinkLight : theme.color.white}
              />
            ) : (
              BTNCONTENT[hospital?.status]
            )}
          </A.BtnToggle>
        </S.RightSection>
      )}
    </S.HospitalItem>
  );
}
export default HospitalItem;
