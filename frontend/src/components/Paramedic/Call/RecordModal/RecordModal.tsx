import A from "/src/components/Commons/Atoms"
import * as S from "./RecordModal.style"
import { CallProps } from "/src/types/paramedic";

function RecordModal ({RecordStop, time} : CallProps) {

  return (
    <S.Overlay>
      <S.Container
        onClick={() => {RecordStop?.()}}>
        <A.ImgRecordingBlack $width="10vh"/>
        <S.Time>{time}</S.Time>
      </S.Container>
    </S.Overlay>
  )
}
export default RecordModal 
