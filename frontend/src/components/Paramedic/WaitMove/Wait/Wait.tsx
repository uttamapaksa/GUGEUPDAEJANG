import * as S from './Wait.style';
import M from '/src/components/Commons/Molecules';

function Wait() {
  return (
    <>
      <S.HospitalList>
        <S.ListTitle>보낸 요청</S.ListTitle>
        <M.HospitalItem />
        <M.HospitalItem />
        <M.HospitalItem />
      </S.HospitalList>

      <S.HospitalList>
        <S.ListTitle>대기 요청</S.ListTitle>
        <M.HospitalItem />
      </S.HospitalList>
    </>
  );
}

export default Wait;
