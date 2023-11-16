import { useEffect, useState } from "react";
import Map from "/src/components/libraries/Map/Map";
import { MapProps } from "/src/types/map";
import { MapContainer } from "../Main/HospitalMap/HospitalMap.styls";

const ParaTransferMapTest = () => {
  const [hospitalMapProps, setHospitalMapProps] = useState<MapProps | undefined>(undefined);

  useEffect(() => {
    const newProps: MapProps = {
      type: "paraTransfer",
      pos: { lat: 37.553756, lon: 126.925356 },
      endPos :{ lat: 37.554034, lon: 126.975598 },
    };
    setHospitalMapProps(newProps);
  }, []);

  return (
    <MapContainer>
      {hospitalMapProps !== undefined ? <Map {...hospitalMapProps}></Map> : <></>}
    </MapContainer>
  );
};

export default ParaTransferMapTest;
