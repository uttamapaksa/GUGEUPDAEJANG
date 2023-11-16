import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { HospitalListState } from '/src/recoils/ParamedicAtoms';
import * as S from './Times.style';
import { useEffect, useState } from 'react';
import { callingStepState } from '/src/recoils/ParamedicAtoms';
import { getHospitals } from '/src/apis/paramedic';
import useResetParamedicRecoil from '../../RecoilReset/RecoilReset';


function Times() {
  const callingTime = (useRecoilValue(HospitalListState)[0] || { callingTime: undefined }).callingTime;
  const date = new Date();
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [callingStep, setCallingStep] = useRecoilState(callingStepState);
  const setHospitals = useSetRecoilState(HospitalListState);
  const resetParemdicRecoil = useResetParamedicRecoil();


  const formatTime = (sec: number): string => {
    const newMinutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${String(newMinutes).padStart(2, '0')} 
    : ${String(seconds).padStart(2, '0')}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) =>{
        const newSeconds = prev + 1;
        if (newSeconds % 60 === 0) {
          setMinutes((m) => m + 1);
        }
        return newSeconds;
      } 
      );
    }, 1000);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  useEffect(() => {
    if (minutes > 1) {
      if (callingStep.step > 2) {
        resetParemdicRecoil()
        return;
      }
      let data = {
        occurrenceId: callingStep.occurrenceId,
        distance: 5 * (callingStep.step + 1) + 0.1, // 무조건 실수
        step: callingStep.step + 1,
      };
      console.log(data);
      getHospitals(data).then((hospitalsData) => {
        setCallingStep((prev) => ({ ...prev, step: prev.step + 1 }));
        if (hospitalsData) {
          setHospitals(hospitalsData);
        }
      });
      setMinutes(0);
      setSeconds(0);
    }
  }, [minutes]);

  return (
    <S.Times>
      <S.CallTime>
        {callingTime
          ? `요청 시각 : ${callingTime.slice(2, 4)}-${callingTime.slice(5, 7)}-${callingTime.slice(
              8,
              10,
            )}(${dayOfWeek}) ${callingTime.slice(11, 13)}:${callingTime.slice(14, 16)}:${callingTime.slice(17, 19)}`
          : `병원이 없습니다`}
      </S.CallTime>
      {/* <S.CallTimes>{callingTime ? formattedTime : '00:00:00'}</S.CallTimes> */}
      <S.CallTimes>{formatTime(seconds)}</S.CallTimes>
    </S.Times>
  );
}

export default Times;
