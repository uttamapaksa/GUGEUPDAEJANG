import { useRecoilState, useSetRecoilState } from 'recoil';
import { HospitalListState, currentParamedicPageIndexState } from '/src/recoils/ParamedicAtoms';
import * as S from './Wait.style';
import M from '/src/components/Commons/Molecules';
import useResetParamedicRecoil from '../../RecoilReset/RecoilReset';

function Wait() {
  const [hospitals, setHospitals] = useRecoilState(HospitalListState);
  const resetParamedicRecoil = useResetParamedicRecoil();
  const setCurrentIndex = useSetRecoilState(currentParamedicPageIndexState);

  return (
    <>
      <S.HospitalList>
        <S.ListTitle>수락된 요청</S.ListTitle>
        {hospitals &&
          hospitals
            .filter((hospital) => hospital.status === 'APPROVED')
            .map((hospital, index) => <M.HospitalItem key={index} hospital={hospital} setHospitals={setHospitals} />)}
      </S.HospitalList>

      <S.HospitalList>
        <S.ListTitle>보낸 요청</S.ListTitle>
        {hospitals &&
          hospitals
            .filter((hospital) => hospital.status !== 'APPROVED')
            .map((hospital, index) => <M.HospitalItem key={index} hospital={hospital} setHospitals={setHospitals} />)}
      </S.HospitalList>

      <S.EndCalling
        onClick={() => {
          resetParamedicRecoil();
          setCurrentIndex(0);
        }}
      >
        이송 중도 취소
      </S.EndCalling>
    </>
  );
}

export default Wait;
