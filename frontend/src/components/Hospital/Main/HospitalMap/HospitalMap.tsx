import { useEffect, useState } from "react";
import { MapContainer } from "./HospitalMap.styls";
import Map from "/src/components/libraries/Map/Map";
import { MapProps } from "/src/types/map";
import { useRecoilValue } from "recoil";
import { currentPosition, hospitalRequestList } from "/src/recoils/HospitalAtoms";

const HospitalMap = (props: { type: string }) => {
  const curPos = useRecoilValue(currentPosition);
  const requestList = useRecoilValue(hospitalRequestList);

  const [hospitalMapProps, setHospitalMapProps] = useState<MapProps>({
    type: props.type,
  });

  useEffect(() => {
    const newProps: MapProps = {
      type: props.type,
      pos: curPos.lat != null && curPos.lon != null ? { lat: curPos.lat, lon: curPos.lon } : undefined,
      parList: requestList !== undefined ? requestList : undefined,
    };
    console.log(curPos)
    setHospitalMapProps(newProps);
  }, [requestList, curPos]);

  return (
    <MapContainer>
      {hospitalMapProps.pos != undefined ? <Map {...hospitalMapProps}></Map> : <></>}
    </MapContainer>
  );
};

export default HospitalMap;
