import * as S from './Wait.style';
import HospitalItem from '/src/components/Commons/Molecules/HospitalItem/HospitalItem';

function Wait() {
  return (
    <>
      <S.HospitalList>
        <S.ListTitle>보낸 요청</S.ListTitle>
        <HospitalItem />
        <HospitalItem />
        <HospitalItem />
      </S.HospitalList>

      <S.HospitalList>
        <S.ListTitle>대기 요청</S.ListTitle>
        <HospitalItem />
      </S.HospitalList>
    </>
  );
}

export default Wait;
