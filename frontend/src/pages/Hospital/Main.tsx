import { useEffect, useState } from "react";
import useGeolocation from "react-hook-geolocation";
import HopsitalHeader from "/src/components/Hospital/HospitalHeader/HopsitalHeader";
import HopsitalSidebar from "/src/components/Hospital/HospitalSidebar/HopsitalSidebar";
import {  useRecoilValue, useSetRecoilState } from "recoil";
import { currentPosition, hospitalComponentType } from "../../recoils/HospitalAtoms";
import HospitalMain from "/src/components/Hospital/Main/HospitalMain";
import { ComponentContainer, Container } from "./Main.style";
import HospitalSocket from "/src/sockets/HospitalSocket";


function Main() {
  const componentType = useRecoilValue(hospitalComponentType);
  const setCurPos = useSetRecoilState(currentPosition);

  const geolocation = useGeolocation();

  const setCurrentPos = () => {
    // let clat = 37.565128;
    // let clon = 126.98883;
    if (geolocation !== undefined) {
      setCurPos({lat:geolocation.latitude, lon:geolocation.longitude})
    }
  };

  useEffect(()=>{
    setCurrentPos();
    console.log("geolocation", geolocation)
  },[geolocation])

  return !geolocation.error ? (
    <Container>
      <HospitalSocket />
      <HopsitalHeader />
      <HopsitalSidebar />
      <ComponentContainer>
        {componentType[0] ? (
          <HospitalMain />
        ) : (
          <></>
        )}
        {componentType[1] ? (
          <>요청/이송 목록</>
        ) : (
          <></>
        )}
        {componentType[2] ? (
          <>이송 기록 수치?</>
        ) : (
          <></>
        )}
      </ComponentContainer>
    </Container>
  ) : (
    <p>No geolocation, sorry.</p>
  );
}
export default Main;