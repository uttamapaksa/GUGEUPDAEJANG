import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentPosition } from '/src/recoils/HospitalAtoms';
import { currentAddressState } from '/src/recoils/ParamedicAtoms';

declare global {
  interface Window {
      kakao: any;
  }
}

const Address = () => {
  const position = useRecoilValue(currentPosition);
  const setAddress = useSetRecoilState(currentAddressState);
  const geocoder = new window.kakao.maps.services.Geocoder();
  var coord = new kakao.maps.LatLng(position.lat, position.lon);

  const callback = function (result: any, status: any) {
    if (status === window.kakao.maps.services.Status.OK) {
      setAddress(result[0].address.address_name);
    }
  };
  
  useEffect(() => {
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  }, [position]);

  return <></>;
};

export default Address;
