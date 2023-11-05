import { useEffect, useState } from "react";
import { MapContainer } from "./HospitalMap.styls";
import Map from "/src/components/libraries/Map/Map";
import { MapProps } from "/src/types/map";
import { useRecoilValue } from "recoil";
import { currentPosition, hospitalRequestList, hospitalSidebarType } from "/src/recoils/HospitalAtoms";

const HospitalMap = () => {
  const curPos = useRecoilValue(currentPosition);
  const requestList = useRecoilValue(hospitalRequestList);

  const isRequest = useRecoilValue(hospitalSidebarType);

  const [hospitalMapProps, setHospitalMapProps] = useState<MapProps | undefined>(undefined);

  useEffect(() => {
    if(curPos.lat != null && curPos.lon != null){
      const newProps: MapProps = {
        type: isRequest ? "req" : "transfer",
        pos:  { lat: curPos.lat, lon: curPos.lon },
        parList: requestList !== undefined ? requestList : undefined,
      };
      console.log(newProps.type, curPos, requestList)
      setHospitalMapProps(newProps);
    }
    
  }, [requestList, curPos, isRequest]);

  return (
    <MapContainer>
      {hospitalMapProps !== undefined ? <Map {...hospitalMapProps}></Map> : <></>}
    </MapContainer>
  );
};

export default HospitalMap;
