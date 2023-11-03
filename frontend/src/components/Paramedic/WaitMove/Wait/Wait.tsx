import * as S from './Wait.style';
import M from '/src/components/Commons/Molecules';
import { CallHospitalType } from '/src/types/paramedic';

function Wait(hospitals: CallHospitalType[]) {
  return (
    <>
      <S.HospitalList>
        <S.ListTitle>보낸 요청</S.ListTitle>
        {hospitals.map((hospital: CallHospitalType, index: number) => (
          <M.HospitalItem key={index} hospital={hospital} />
        )}
      </S.HospitalList>

      <S.HospitalList>
        <S.ListTitle>대기 요청</S.ListTitle>
        {hospitals.map((hospital: CallHospitalType, index: number) => (
          <M.HospitalItem key={index} hospital={hospital} />
        )}
      </S.HospitalList>
    </>
  );
}

export default Wait;
