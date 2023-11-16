import { useResetRecoilState } from 'recoil';
import {
  occurrenceState,
  callingStepState,
  fixedCallingState,
  isTransferringState,
  currentParamedicPageIndexState,
  isCanceledState,
  isCompletedState,
  recordImageFile,
  recordVideoFile,
  recordVoiceFile,
  recordContentFile,
} from '/src/recoils/ParamedicAtoms';

function useResetParamedicRecoil() {
  const resetStep = useResetRecoilState(callingStepState);
  const resetOccurrence = useResetRecoilState(occurrenceState);
  const resetFixedCalling = useResetRecoilState(fixedCallingState);
  const resetIsTransferring = useResetRecoilState(isTransferringState);
  const resetIsCanceledState = useResetRecoilState(isCanceledState);
  const resetRecordImageFile = useResetRecoilState(recordImageFile);
  const resetRecordVideoFile = useResetRecoilState(recordVideoFile);
  const resetRecordVoiceFile = useResetRecoilState(recordVoiceFile);
  const resetRecordContentFile = useResetRecoilState(recordContentFile);
  const resetIsCompletedState = useResetRecoilState(isCompletedState);
  const resetCurrentPageIndex = useResetRecoilState(currentParamedicPageIndexState);

  return () => {
    resetStep();
    resetOccurrence();
    resetFixedCalling();
    resetIsTransferring();
    resetIsCanceledState();
    resetIsCompletedState();
    resetCurrentPageIndex();
    resetRecordImageFile();
    resetRecordVideoFile();
    resetRecordVoiceFile();
    resetRecordContentFile();
  };
}

export default useResetParamedicRecoil;
