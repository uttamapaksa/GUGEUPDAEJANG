import { useEffect, useState } from "react";
import { MapContainer } from "./HospitalMap.styls";
import Map from "/src/components/libraries/Map/Map";
import { MapProps } from "/src/types/map";
import { useRecoilValue } from "recoil";
import { hospitalParmedicRequestList, hospitalSidebarType, hospitalParmedicTransferList } from "/src/recoils/HospitalAtoms";
import { hospitalInfoState } from "/src/recoils/AuthAtoms";

const HospitalMap = () => {
  // const curPos = useRecoilValue(currentPosition);
  const hospitalInfo = useRecoilValue(hospitalInfoState);
  const requestList = useRecoilValue(hospitalParmedicRequestList);
  const transferList = useRecoilValue(hospitalParmedicTransferList);

  const isRequest = useRecoilValue(hospitalSidebarType);

  const [hospitalMapProps, setHospitalMapProps] = useState<MapProps | undefined>(undefined);

  useEffect(() => {
    console.log("ㄴnewProps: MapPropsㄱ")
    if(hospitalInfo!==undefined && hospitalInfo.latitude !== undefined && hospitalInfo.longitude !== undefined && hospitalInfo.latitude !== 0){
      if(isRequest){
        const newProps: MapProps = {
          type: "request",
          pos:  { lat: hospitalInfo.latitude, lon: hospitalInfo.longitude },
          paraRequestList: requestList !== undefined ? requestList : undefined,
        };
        console.log("request", newProps, requestList)
        setHospitalMapProps(newProps);
      }
      else{
        const newProps: MapProps = {
          type: "transfer",
          pos:  { lat: hospitalInfo.latitude, lon: hospitalInfo.longitude },
          paraTransferList: transferList !== undefined ? transferList : undefined,
        };
        console.log("transfer", newProps, transferList)
        setHospitalMapProps(newProps);
      }
      
    }
    
  }, [requestList, transferList, hospitalInfo, isRequest]);

  return (
    <MapContainer>
      {hospitalMapProps !== undefined ? <Map {...hospitalMapProps}></Map> : <></>}
    </MapContainer>
  );
};

export default HospitalMap;
