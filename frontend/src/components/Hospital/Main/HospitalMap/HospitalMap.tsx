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
    pos: { lat: curPos.lat, lon: curPos.lon },
  });

  useEffect(() => {
    const newProps: MapProps = {
      type: props.type,
      pos: { lat: curPos.lat, lon: curPos.lon },
      parList: requestList,
    };
    setHospitalMapProps(newProps);
  }, [props]);

  return (
    <MapContainer>
      <Map {...hospitalMapProps}></Map>
    </MapContainer>
  );
};

export default HospitalMap;
