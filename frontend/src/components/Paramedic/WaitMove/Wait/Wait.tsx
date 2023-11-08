import { useRecoilState } from 'recoil';
import { HospitalListState } from '/src/recoils/ParamedicAtoms';
import * as S from './Wait.style';
import M from '/src/components/Commons/Molecules';

function Wait() {
  const [hospitals, setHospitals] = useRecoilState(HospitalListState);

  return (
    <>
      <S.HospitalList>
        <S.ListTitle>수락된 요청</S.ListTitle>
        {hospitals && hospitals
          .filter((hospital) => hospital.status === 'APPROVED')
          .map((hospital, index) => (
            <M.HospitalItem key={index} hospital={hospital} setHospitals={setHospitals} />
          ))}
      </S.HospitalList>

      <S.HospitalList>
        <S.ListTitle>보낸 요청</S.ListTitle>
        {hospitals && hospitals
          .filter((hospital) => hospital.status !== 'APPROVED')
          .map((hospital, index) => (
            <M.HospitalItem key={index} hospital={hospital} setHospitals={setHospitals} />
          ))}
      </S.HospitalList>
    </>
  );
}

export default Wait;
