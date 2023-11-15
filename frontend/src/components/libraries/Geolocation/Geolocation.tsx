import { useEffect } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { currentPosition } from '/src/recoils/HospitalAtoms';
import useGeolocation from 'react-hook-geolocation';

function Geolocation() {
  const [curPos, setCurPos] = useRecoilState(currentPosition);
  const geolocation = useGeolocation({ 
    enableHighAccuracy: true, 
    timeout: 1000,
    maximumAge: 1000,
  });

  const setCurrentPos = () => {
    if (geolocation.latitude !== null) {
      setCurPos({ lat: geolocation.latitude, lon: geolocation.longitude });
    }
  };

  useEffect(() => {
    setCurrentPos();
  }, [geolocation]);

  return (
    <>
      <p>latitude : {curPos.lat}</p>
      <p>longitude : {curPos.lon}</p>
      <p>geolocation : {geolocation.latitude} {geolocation.longitude}</p>
    </>
  );
}
export default Geolocation;
