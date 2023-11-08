import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { currentPosition } from '/src/recoils/HospitalAtoms';
import useGeolocation from 'react-hook-geolocation';

function Geolocation() {
  // const setCurPos = useSetRecoilState(currentPosition);
  const [curPos, setCurPos] = useRecoilState(currentPosition)
  const geolocation = useGeolocation();

  const setCurrentPos = () => {
    if (geolocation !== undefined) {
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
    </>
  );
}
export default Geolocation;
