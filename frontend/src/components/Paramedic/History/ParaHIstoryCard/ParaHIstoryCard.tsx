import { useRecoilState, useRecoilValue } from 'recoil';
import { centerHistoriesState, historyDetailState, paramedicHistoriesState } from '/src/recoils/ParamedicAtoms';
import * as S from './ParaHIstoryCard.style';
import { useEffect, useState } from 'react';
import { ParamedicHistoryType } from '/src/types/paramedic';
import ParaHistoryDetail from '../ParaHistoryDetail/ParaHistoryDetail';

interface GroupMapping {
  [key: string]: string;
}

const ageGroupMapping: GroupMapping = {
  INFANT: '영유아',
  CHILD: '아동',
  ADOLESCENT: '청소년',
  YOUTH: '청년',
  MIDDLE: '중장년',
  SENIOR: '노인',
};
const genderMapping: GroupMapping = {
  MALE: '남',
  FEMALE: '여',
};


function ParaHistoryCard({ showCenter }: { showCenter: boolean }) {
  const paramedicHistories = useRecoilValue(paramedicHistoriesState);
  const centerHistories = useRecoilValue(centerHistoriesState);
  const [histories, setHistories] = useState<ParamedicHistoryType[]>()
  const [historyDetail, setHistoryDetail] = useRecoilState(historyDetailState)
  
  const DetailOpen = (history:ParamedicHistoryType) => {
    setHistoryDetail(history)
  }
  const DetailClose = () => {
    setHistoryDetail(null)
  }

  useEffect(() => {
    if (showCenter) {setHistories(paramedicHistories)}
    else {setHistories(centerHistories)}
  },[paramedicHistories,centerHistories,showCenter])
  
  return (
    <S.SearchList>
      {historyDetail && <ParaHistoryDetail DetailClose = {DetailClose}/>}
      {histories && histories.map((history,index) => (
        <S.Item 
          key={index} 
          onClick={() => DetailOpen(history)}>
          <S.ItemRow>
            {history.completed || <S.Status>이송 취소</S.Status>}
            <S.ItemCategory>
              날짜
            </S.ItemCategory>
            <S.ItemContent>
              {history.date}
            </S.ItemContent>
          </S.ItemRow>
          <S.ItemRow>
            <S.ItemCategory>
              이송 시간
            </S.ItemCategory>
            <S.ItemContent>
              {history.transferStartTime}-
              {history.transferEndTime}
            </S.ItemContent>
          </S.ItemRow>
          <S.ItemRow>
            <S.ItemCategory>
              이송 병원
            </S.ItemCategory>
            <S.ItemContent2>
              {history.hospitalName}
            </S.ItemContent2>
          </S.ItemRow>
          <S.ItemRow>
            <S.ItemCategory>
              사고 주소
            </S.ItemCategory>
            <S.ItemContent2>
              {history.accidentAddress}
            </S.ItemContent2>
          </S.ItemRow>
          <S.ItemRow>
            <S.ItemCategory>
              인적 사항
            </S.ItemCategory>
            <S.ItemContent>
              {ageGroupMapping[history.ageGroup]} ({genderMapping[history.gender]})
            </S.ItemContent>
          </S.ItemRow>
          <S.ItemRow>
            <S.ItemCategory>
              응급 분류
            </S.ItemCategory>
            <S.ItemContent>
              {history.ktas}
            </S.ItemContent>
          </S.ItemRow>
        </S.Item>
      ))}
    </S.SearchList>
  );
}

export default ParaHistoryCard;
