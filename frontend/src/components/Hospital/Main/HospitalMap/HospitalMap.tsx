import { MapContainer } from "./HospitalMap.styls";
import Map from "/src/components/libraries/Map/Map";
import { MapProps } from "/src/types/map";

const HospitalMap = (props: MapProps) => {
  return (
    <MapContainer>
      <Map {...props}></Map>
    </MapContainer>
  );
};

export default HospitalMap;
