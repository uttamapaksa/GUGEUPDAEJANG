import { useEffect } from "react";
import HopsitalHeader from "/src/components/Hospital/HospitalHeader/HopsitalHeader";
import HopsitalSidebar from "/src/components/Hospital/HospitalSidebar/HopsitalSidebar";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { hospitalComponentType, hospitalParmedicRequestList, hospitalParmedicTransferList } from "../../recoils/HospitalAtoms";
import HospitalMain from "/src/components/Hospital/Main/HospitalMain";
import { ComponentContainer, Container } from "./Main.style";
import HospitalSocket from "/src/sockets/HospitalSocket";
import HospitalHistory from "/src/components/Hospital/History/HospitalHistory";
import { getMyHospital } from "/src/apis/hospital";
import { hospitalInfoState, memberInfoState } from "/src/recoils/AuthAtoms";
import { HosJoinProps } from "/src/types/auth";
import ParaMapTest from "/src/components/Hospital/Test/ParaMapTest";
import HospitalReport from "/src/components/Hospital/Report/HospitalReport";
import OpenViduComponent from "/src/components/libraries/Openvidu/OpenViduComponent";


function Main() {
  const componentType = useRecoilValue(hospitalComponentType);
  // const setCurPos = useSetRecoilState(currentPosition);
  const [hospitalInfo, setHospitalInfo] = useRecoilState(hospitalInfoState);
  const curMemberInfo = useRecoilValue(memberInfoState);
  const [requestList, setRequestList] = useRecoilState(hospitalParmedicRequestList);
  const [transferList, setTransferList] = useRecoilState(hospitalParmedicTransferList);

  // const geolocation = useGeolocation();

  const setCurrentPos = async () => {
    // setCurPos({ lat: 36.4469365928189, lon: 127.43940812262 });

    const responese = await getMyHospital();
    console.log("`````hospitalInfo", hospitalInfo)
    if ((hospitalInfo.hospitalId===0 || hospitalInfo === undefined) && responese !== undefined && curMemberInfo.role === "HOSPITAL") {
      console.log("초기화초기화초기화초기화초기화초기화초기화초기화초기화초기화")
      if(requestList!==undefined) setRequestList([]);
      if(transferList!==undefined) setTransferList([]);
      // setCurPos({ lat: responese.data.latitude, lon: responese.data.longitude });
      const curHospitalInfo: HosJoinProps = {
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

  return (
    <Container>
      <HospitalSocket />
      <HopsitalHeader />
      <HopsitalSidebar />
      <ComponentContainer>
        {componentType[0] ? (
          <OpenViduComponent transferId={1111}></OpenViduComponent>
          // <HospitalMain />
        ) : (
          <></>
        )}
        {componentType[1] ? (
          <HospitalHistory />
        ) : (
          <></>
        )}
        {componentType[2] ? (
          // <ParaMapTest/>
          <HospitalReport/>
        ) : (
          <></>
        )}
      </ComponentContainer>
    </Container>
  );
}
export default Main;