import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { currentPosition } from '/src/recoils/HospitalAtoms';
import useGeolocation from 'react-hook-geolocation';

function Geolocation() {
  const setCurPos = useSetRecoilState(currentPosition);
  const geolocation = useGeolocation({
    enableHighAccuracy: true,
    timeout: 3000,
    maximumAge: 1000,
  });

  const setCurrentPos = () => {
    if (geolocation !== undefined) {
      // console.log("내 위치",geolocation)
      setCurPos({ lat: geolocation.latitude, lon: geolocation.longitude });
    }
  };

  useEffect(() => {
    setCurrentPos();
  }, [geolocation]);

  return <></>;
}
export default Geolocation;
