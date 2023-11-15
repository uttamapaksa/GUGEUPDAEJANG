import { useState, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { paramedicHistoriesState, startTimeState, endTimeState, centerHistoriesState } from '/src/recoils/ParamedicAtoms';
import { getParamedicHistories } from '/src/apis/paramedic';
import * as S from './ParaHistoryOption.style';
import ParamedicCalender from '../../../libraries/Calender/ParamedicCalender';
import A from '/src/components/Commons/Atoms';
import Spinner from '/src/components/libraries/Spinner/Spinner';


function ParaHistoryOption({ showCenter }: { showCenter: boolean }) {
  const startTime = useRecoilValue(startTimeState);
  const endTime = useRecoilValue(endTimeState);
  const [stop, setStop] = useState<number>(0)
  const [showSpinner, setShowSpinner] = useState(false);
  
  useEffect(() => {
    if (stop <= 1) {readHistories()}
    setStop(stop + 1)
  }, [showCenter])

  // IOSString
  const formattedDate = (selcetedDate: string) => {
    const dateObj = new Date(selcetedDate);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    return `${year}년 ${month}월 ${day}일`;
  };

  // paramedic histories
  const setParamedicHistories = useSetRecoilState(paramedicHistoriesState);
  const setCenterHistoriesState = useSetRecoilState(centerHistoriesState);

  const readHistories = () => {
    if (showSpinner) return;
    setShowSpinner(true)
    getParamedicHistories(startTime.toISOString().slice(0, 22), endTime.toISOString().slice(0, 22), showCenter).then((historyData) => {
      setShowSpinner(false)
      if (historyData) {
        if(showCenter) {
          setParamedicHistories(historyData);
        } else {
          setCenterHistoriesState(historyData)
        } 
      }
    });
  };

  // calender
  const [showCalender, setShowCalender] = useState(false);

  return (
    <S.Option>
      {showCalender && (
        <S.CalenderModalOverlay onClick={()=>setShowCalender(false)}>
          <S.CalenderModal onClick={(e) => e.stopPropagation()}>
            <ParamedicCalender />
          </S.CalenderModal>
        </S.CalenderModalOverlay>
      )}

      <S.OptionTitle>조회 기간</S.OptionTitle>
      <S.OptionTimeBox onClick={() => setShowCalender((prev) => !prev)}>
        <S.CalenderIcon>
          <A.ImgCalenderIcon $height="2.5vh"></A.ImgCalenderIcon>
        </S.CalenderIcon>
        {formattedDate(startTime)}
      </S.OptionTimeBox>

      <S.OptionTimeTilde>~</S.OptionTimeTilde>

      <S.OptionTimeBox onClick={() => setShowCalender((prev) => !prev)}>
        <S.CalenderIcon>
          <A.ImgCalenderIcon $height="2.5vh"></A.ImgCalenderIcon>
        </S.CalenderIcon>
        {formattedDate(endTime)}
      </S.OptionTimeBox>

      <S.OptionTimeBtn onClick={readHistories}>
        { showSpinner ? <Spinner position='absolute' width='10vh' height='5vh' top='-0.6vh' color='white'></Spinner> : '조회'}
      </S.OptionTimeBtn>
    </S.Option>
  );
}

export default ParaHistoryOption;
