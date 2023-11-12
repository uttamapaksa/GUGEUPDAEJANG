import * as S from './ParamedicMapstyle';
import Map from '/src/components/libraries/Map/Map';
import { MapProps } from '/src/types/map';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { occurrenceState, isTransferringState, fixedCallingState, callingStepState } from '/src/recoils/ParamedicAtoms';
import { currentPosition } from '/src/recoils/HospitalAtoms';
import { HospitalListState } from '/src/recoils/ParamedicAtoms';
import { HospitalItem } from '/src/types/map';

const statusMapping: { [key: string]: string } = {
  PENDING: 'wait',
  APPROVED: 'accept',
  REJECTED: 'refuse',
  CANCELED: 'refuse',
};

function ParamedicMap() {
  const occurrence = useRecoilValue(occurrenceState);
  const callingStep = useRecoilValue(callingStepState)
  const currPosition = useRecoilValue(currentPosition);
  const hospitalList = useRecoilValue(HospitalListState);
  const fixedCalling = useRecoilValue(fixedCallingState);
  const isTransferring = useRecoilValue(isTransferringState);
  const [paramedicMapProps, setparamedicMapProps] = useState<MapProps | undefined>(undefined);
  const [updatedPosition, setUpdatedPosition] = useState<{lat: number, lon: number}>(currPosition);

  useEffect(() => {
    if (currPosition.lat && currPosition.lon) {
      if (!isTransferring) {
        const hosList: HospitalItem[] = hospitalList.map((hospital) => ({
          id: hospital.memberId,
          pos: { lat: hospital.latitude, lon: hospital.longitude },
          response: statusMapping[hospital.status],
        }));
        const newProps: MapProps = {
          type: 'paraRequest',
          pos: { lat: updatedPosition.lat, lon: updatedPosition.lon },
          hosList: hosList ? hosList : undefined,
          occurData: {pos: {lat: occurrence.latitude, lon: occurrence.longitude}, radius: 5000 * callingStep}
        };
        console.log('paraRequest', newProps);
        setparamedicMapProps(newProps);
      } else {
        const newProps: MapProps = {
          type: 'paraTransfer',
          pos: { lat: updatedPosition.lat, lon: updatedPosition.lon },
          endPos: { lat: fixedCalling.latitude, lon: fixedCalling.longitude },
        };
        console.log('paraTransfer', newProps);
        setparamedicMapProps(newProps);
      }
    }
  }, [fixedCalling, callingStep, updatedPosition, hospitalList, isTransferring]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setUpdatedPosition(currPosition)
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);


  return <S.Map>{paramedicMapProps !== undefined ? <Map {...paramedicMapProps}></Map> : <></>}</S.Map>;
}

export default ParamedicMap;