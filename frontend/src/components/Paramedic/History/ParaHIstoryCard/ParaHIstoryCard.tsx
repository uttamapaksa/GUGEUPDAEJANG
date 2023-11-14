import { useRecoilValue } from 'recoil';
import { paramedicHistoriesState } from '/src/recoils/ParamedicAtoms';
import * as S from './ParaHIstoryCard.style';


function ParaHistoryCard() {
  const paramedicHistories = useRecoilValue(paramedicHistoriesState);
  
  return (
    <S.SearchList>
      {paramedicHistories.map((history) => (
      <S.Item>
        {history.completed && <S.Status>이송 취소</S.Status>}
        <S.ItemRow>
          <S.ItemCategory>
            <span>날</span>
            <span>찌</span>
          </S.ItemCategory>
          <S.ItemContent></S.ItemContent>
        </S.ItemRow>
        <S.ItemRow>
          <S.ItemCategory>
            <span>이</span>
            <span>송</span>
            <span>시</span>
            <span>간</span>
          </S.ItemCategory>
          <S.ItemContent></S.ItemContent>
        </S.ItemRow>
        <S.ItemRow>
          <S.ItemCategory>
            <span>이</span>
            <span>송</span>
            <span>병</span>
            <span>원</span>
          </S.ItemCategory>
          <S.ItemContent></S.ItemContent>
        </S.ItemRow>
        <S.ItemRow>
          <S.ItemCategory>
            <span>사</span>
            <span>고</span>
            <span>주</span>
            <span>소</span>
          </S.ItemCategory>
          <S.ItemContent>
          </S.ItemContent>
        </S.ItemRow>
        <S.ItemRow>
          <S.ItemCategory></S.ItemCategory>
          <S.ItemContent></S.ItemContent>
        </S.ItemRow>
        <S.ItemRow>
          <S.ItemCategory>
            <span>응</span>
            <span>급</span>
            <span>분</span>
            <span>류</span>
          </S.ItemCategory>
          <S.ItemContent></S.ItemContent>
        </S.ItemRow>
      </S.Item>
      ))}
    </S.SearchList>
  );
}

export default ParaHistoryCard;
