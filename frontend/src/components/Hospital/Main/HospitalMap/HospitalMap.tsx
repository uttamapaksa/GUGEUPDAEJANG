import { useEffect, useState } from "react";
import { MapContainer } from "./HospitalMap.styls";
import Map from "/src/components/libraries/Map/Map";
import { MapProps } from "/src/types/map";
import { useRecoilValue } from "recoil";
import { currentPosition, hospitalRequestList, hospitalSidebarType, hospitalTransferList } from "/src/recoils/HospitalAtoms";

const HospitalMap = () => {
  const curPos = useRecoilValue(currentPosition);
  const requestList = useRecoilValue(hospitalRequestList);
  const transferList = useRecoilValue(hospitalTransferList);

  const isRequest = useRecoilValue(hospitalSidebarType);

  const [hospitalMapProps, setHospitalMapProps] = useState<MapProps | undefined>(undefined);

  useEffect(() => {
    if(curPos.lat != null && curPos.lon != null){
      if(isRequest){
        const newProps: MapProps = {
          type: "request",
          pos:  { lat: curPos.lat, lon: curPos.lon },
          paraRequestList: requestList !== undefined ? requestList : undefined,
        };
        console.log(newProps.type, curPos, requestList)
        setHospitalMapProps(newProps);
      }
      else{
        const newProps: MapProps = {
          type: "transfer",
          pos:  { lat: curPos.lat, lon: curPos.lon },
          paraTransferList: transferList !== undefined ? transferList : undefined,
        };
        console.log(newProps.type, curPos, transferList)
        setHospitalMapProps(newProps);
      }
      
    }
    
  }, [requestList, curPos, isRequest]);

  return (
    <MapContainer>
      {hospitalMapProps !== undefined ? <Map {...hospitalMapProps}></Map> : <></>}
    </MapContainer>
  );
};

export default HospitalMap;
