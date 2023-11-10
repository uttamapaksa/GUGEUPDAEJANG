import { useResetRecoilState } from 'recoil';
import {
  occurrenceState,
  callingStepState,
  fixedCallingState,
  isTransferringState,
  transferHospitalIdState,
  currentParamedicPageIndexState,
} from '/src/recoils/ParamedicAtoms';

function useResetParamedicRecoil() {
  const resetStep = useResetRecoilState(callingStepState);
  const resetOccurrence = useResetRecoilState(occurrenceState);
  const resetFixedCalling = useResetRecoilState(fixedCallingState);
  const resetIsTransferring = useResetRecoilState(isTransferringState);
  const resetCurrentPageIndex = useResetRecoilState(currentParamedicPageIndexState);
  const resetTransferHospitalId = useResetRecoilState(transferHospitalIdState);

  return () => {
    resetStep();
    resetOccurrence();
    resetFixedCalling();
    resetIsTransferring();
    resetCurrentPageIndex();
    resetTransferHospitalId();
  };
}

export default useResetParamedicRecoil;
