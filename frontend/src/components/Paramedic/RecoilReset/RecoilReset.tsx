import { useResetRecoilState } from 'recoil';
import {
  occurrenceState,
  callingStepState,
  fixedCallingState,
  isTransferringState,
  currentParamedicPageIndexState,
  isCanceledState,
  isCompletedState,
} from '/src/recoils/ParamedicAtoms';

function useResetParamedicRecoil() {
  const resetStep = useResetRecoilState(callingStepState);
  const resetOccurrence = useResetRecoilState(occurrenceState);
  const resetFixedCalling = useResetRecoilState(fixedCallingState);
  const resetIsTransferring = useResetRecoilState(isTransferringState);
  const resetIsCanceledState = useResetRecoilState(isCanceledState);
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
  };
}

export default useResetParamedicRecoil;
