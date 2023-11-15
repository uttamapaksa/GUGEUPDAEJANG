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
              <span>날</span>
              <span>찌</span>
            </S.ItemCategory>
            <S.ItemContent>
              {history.date}
            </S.ItemContent>
          </S.ItemRow>
          <S.ItemRow>
            <S.ItemCategory>
              <span>이</span>
              <span>송</span>
              <span>시</span>
              <span>간</span>
            </S.ItemCategory>
            <S.ItemContent>
              {history.transferStartTime}-
              {history.transferEndTime}
            </S.ItemContent>
          </S.ItemRow>
          <S.ItemRow>
            <S.ItemCategory>
              <span>이</span>
              <span>송</span>
              <span>병</span>
              <span>원</span>
            </S.ItemCategory>
            <S.ItemContent2>
              {history.hospitalName}
            </S.ItemContent2>
          </S.ItemRow>
          <S.ItemRow>
            <S.ItemCategory>
              <span>사</span>
              <span>고</span>
              <span>주</span>
              <span>소</span>
            </S.ItemCategory>
            <S.ItemContent2>
              {history.accidentAddress}
            </S.ItemContent2>
          </S.ItemRow>
          <S.ItemRow>
            <S.ItemCategory>
              <span>인</span>
              <span>적</span>
              <span>사</span>
              <span>항</span>
            </S.ItemCategory>
            <S.ItemContent>
              {ageGroupMapping[history.ageGroup]} ({genderMapping[history.gender]})
            </S.ItemContent>
          </S.ItemRow>
          <S.ItemRow>
            <S.ItemCategory>
              <span>응</span>
              <span>급</span>
              <span>분</span>
              <span>류</span>
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
