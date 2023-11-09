import { useRecoilValue } from 'recoil';
import { HospitalListState } from '/src/recoils/ParamedicAtoms';
import * as S from './Times.style';

function Times() {
  // "2023-11-02T08:38:44.295165047"
  const callingTime = (useRecoilValue(HospitalListState)[0] || { callingTime: undefined }).callingTime;
  const date = new Date();
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];

  return (
    <S.Times>
      <S.CallTime>
        {callingTime
          ? `요청 시각 : ${callingTime.slice(2, 4)}-${callingTime.slice(5, 7)}-${callingTime.slice(8, 10)}(${dayOfWeek}) ${
            callingTime.slice(11, 13)}:${callingTime.slice(14, 16)}:${callingTime.slice(17, 19)}`
          : `병원이 없습니다`}
      </S.CallTime>
      <S.CallTimes>{callingTime ? `${callingTime.slice(14, 16)}:${callingTime.slice(17, 19)}` : '00:00'}</S.CallTimes>
    </S.Times>
  );
}

export default Times;
