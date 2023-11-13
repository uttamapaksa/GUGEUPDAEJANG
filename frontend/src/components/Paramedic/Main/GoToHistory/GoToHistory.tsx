
import { useSetRecoilState } from 'recoil';
import { currentParamedicPageIndexState } from '/src/recoils/ParamedicAtoms';
import * as S from './GoToHistory.style';

function GoToHistory() {
  const setCurrentIndex = useSetRecoilState(currentParamedicPageIndexState);

  return (
  <S.GoToHistory onClick={()=>setCurrentIndex(3)}>
    환자 이송 기록 보기
  </S.GoToHistory>);
}

export default GoToHistory;
