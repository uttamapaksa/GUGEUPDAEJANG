import * as S from './Wait.style';
import M from '/src/components/Commons/Molecules';
import { CalledHospitalType } from '/src/types/paramedic';

function Wait({ hospitals, setHospitals }: { hospitals: CalledHospitalType[], setHospitals: any }) {
  return (
    <>
      <S.HospitalList>
        <S.ListTitle>수락된 요청</S.ListTitle>
        {hospitals
          .filter((hospital) => hospital.status === 'APPROVED')
          .map((hospital, index) => (
            <M.HospitalItem key={index} hospital={hospital} setHospitals={setHospitals} />
          ))}
      </S.HospitalList>

      <S.HospitalList>
        <S.ListTitle>보낸 요청</S.ListTitle>
        {hospitals
          .filter((hospital) => hospital.status !== 'APPROVED')
          .map((hospital, index) => (
            <M.HospitalItem key={index} hospital={hospital} setHospitals={setHospitals} />
          ))}
      </S.HospitalList>
    </>
  );
}

export default Wait;
