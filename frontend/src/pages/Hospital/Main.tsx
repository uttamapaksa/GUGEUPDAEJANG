import { useEffect, useState } from "react";
import useGeolocation from "react-hook-geolocation";
import HopsitalHeader from "/src/components/Hospital/HospitalHeader/HopsitalHeader";
import HopsitalSidebar from "/src/components/Hospital/HospitalSidebar/HopsitalSidebar";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentPosition, hospitalComponentType } from "../../recoils/HospitalAtoms";
import HospitalMain from "/src/components/Hospital/Main/HospitalMain";
import { ComponentContainer, Container } from "./Main.style";
import HospitalSocket from "/src/sockets/HospitalSocket";
import HospitalHistory from "/src/components/Hospital/History/HospitalHistory";
import { getMyHospital } from "/src/apis/hospital";
import { hospitalInfoState, memberInfoState } from "/src/recoils/AuthAtoms";
import { HosJoinProps } from "/src/types/auth";


function Main() {
  const componentType = useRecoilValue(hospitalComponentType);
  const setCurPos = useSetRecoilState(currentPosition);
  const setHospitalInfo = useSetRecoilState(hospitalInfoState);
  const curMemberInfo = useRecoilValue(memberInfoState);

  const geolocation = useGeolocation();

  const setCurrentPos = async () => {
    const responese = await getMyHospital();
    if (responese !== undefined && curMemberInfo.role==="HOSPITAL") {
      setCurPos({ lat: responese.data.latitude, lon: responese.data.longitude });
      const curHospitalInfo:HosJoinProps = {
        hospitalId: curMemberInfo.memberId, //id 는 number로 사용
        email: "",
        password: "",
        name: responese.data.name,
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/pocket-sch.appspot.com/o/hospital_tmp.png?alt=media&token=3361b47c-fb74-4932-aab5-e28bdce64f4d&_gl=1*ijrqc8*_ga*Nzk4NDA1MzUuMTY5ODEyNTQzMw..*_ga_CW55HF8NVT*MTY5ODEyNTQzMy4xLjEuMTY5ODEyNTUxNS42MC4wLjA.",
        role: "HOSPITAL",
        telephone1: responese.data.telephone1,
        telephone2: responese.data.telephone2,
        address: responese.data.address,
        latitude: responese.data.latitude,
        longitude: responese.data.longitude
      }
      setHospitalInfo(curHospitalInfo);
    }
  };

  useEffect(() => {
    setCurrentPos();
  }, [])

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
          <HospitalHistory />
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