import { useRecoilValue } from 'recoil';
import { HospitalListState } from '/src/recoils/ParamedicAtoms';
import * as S from './Times.style';

function Times() {
  const callingTime = (useRecoilValue(HospitalListState)[0] || { callingTime: undefined }).callingTime;
  const date = new Date();
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];

  return (
    <S.Times>
      <S.CallTime>
        {`요청 시각 : `}
        {callingTime
          ? `${callingTime[0].toString().slice(2, 4)}-${callingTime[1]}-${callingTime[2]}(${dayOfWeek}) ${
              callingTime[3]}:${callingTime[4]}:${callingTime[5]}`
          : `00-00-00(일) 00:00:00`}
      </S.CallTime>
      <S.CallTimes>{callingTime ? `${callingTime[3]}:${callingTime[4]}` : '00:00'}</S.CallTimes>
    </S.Times>
  );
}

export default Times;
