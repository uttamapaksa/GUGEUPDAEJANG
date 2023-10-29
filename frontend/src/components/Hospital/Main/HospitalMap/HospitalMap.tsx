import { MapContainer } from "./HospitalMap.styls";
import Map, { MapProps } from "/src/components/libraries/Map/Map";

const HospitalMap = (props: MapProps) => {
  return (
    <MapContainer>
      <Map {...props}></Map>
    </MapContainer>
  );
};

export default HospitalMap;
