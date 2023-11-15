import { useRecoilValue } from 'recoil';
import { HospitalListState } from '/src/recoils/ParamedicAtoms';
import * as S from './Times.style';
import { useEffect, useState } from 'react';

function Times() {
  // "2023-11-02T08:38:44.295165047"
  const callingTime = (useRecoilValue(HospitalListState)[0] || { callingTime: undefined }).callingTime;
  const date = new Date();
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];
  const [seconds, setSeconds] = useState<number>(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const handleRecordingTimer = () => {
    setTimer(
      setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000),
    );
    if (timer) {
      clearInterval(timer);
      setSeconds(0);
    }
  };
  const clearTimer = () => {
    if (timer) clearInterval(timer);
  };

  const formatTime = (sec: number): string => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${String(minutes).padStart(2, '0')} 
    : ${String(seconds).padStart(2, '0')}`;
  };

  useEffect(() => {
    handleRecordingTimer();
    return clearTimer;
  }, []);

  return (
      <S.Times>
      <S.CallTime>
        {callingTime
          ? `요청 시각 : ${callingTime.slice(2, 4)}-${callingTime.slice(5, 7)}-${callingTime.slice(8, 10)}(${dayOfWeek}) ${
              callingTime.slice(11, 13)}:${callingTime.slice(14, 16)}:${callingTime.slice(17, 19)}`
          : `병원이 없습니다`}
      </S.CallTime>
      {/* <S.CallTimes>{callingTime ? formattedTime : '00:00:00'}</S.CallTimes> */}
      <S.CallTimes>{formatTime(seconds)}</S.CallTimes>
    </S.Times>
  );
}

export default Times;
