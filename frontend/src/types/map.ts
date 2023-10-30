import { MapProps } from "../components/libraries/Map/Map";

export interface GuestMapProps {
  mapProps: MapProps | undefined;
  setMapProps: React.Dispatch<React.SetStateAction<MapProps | undefined>>;
}