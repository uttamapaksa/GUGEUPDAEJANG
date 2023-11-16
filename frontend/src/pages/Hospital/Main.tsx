import { useEffect } from "react";
import HopsitalHeader from "/src/components/Hospital/HospitalHeader/HopsitalHeader";
import HopsitalSidebar from "/src/components/Hospital/HospitalSidebar/HopsitalSidebar";
import { useRecoilState, useRecoilValue } from "recoil";
import { hospitalComponentType, hospitalParmedicRequestList, hospitalParmedicTransferList } from "../../recoils/HospitalAtoms";
import HospitalMain from "/src/components/Hospital/Main/HospitalMain";
import { ComponentContainer, Container } from "./Main.style";
import HospitalSocket from "/src/sockets/HospitalSocket";
import HospitalHistory from "/src/components/Hospital/History/HospitalHistory";
import { getHospitalImg, getMyHospital } from "/src/apis/hospital";
import { hospitalInfoState, memberInfoState } from "/src/recoils/AuthAtoms";
import { HosJoinProps } from "/src/types/auth";
import HospitalReport from "/src/components/Hospital/Report/HospitalReport";


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
    const hospitalData = await getHospitalImg(curMemberInfo.memberId);
    console.log("`````hospitalInfo", hospitalInfo)
    if ((hospitalInfo.hospitalId === 0 || hospitalInfo === undefined) && responese !== undefined && curMemberInfo.role === "HOSPITAL") {
      console.log("초기화초기화초기화초기화초기화초기화초기화초기화초기화초기화")
      if (requestList !== undefined) setRequestList([]);
      if (transferList !== undefined) setTransferList([]);
      // setCurPos({ lat: responese.data.latitude, lon: responese.data.longitude });
      const curHospitalInfo: HosJoinProps = {
        hospitalId: curMemberInfo.memberId, //id 는 number로 사용
        email: "",
        password: "",
        name: responese.data.name,
        imageUrl: hospitalData !== undefined ? hospitalData.data.imageUrl : "",
        role: "HOSPITAL",
        telephone1: responese.data.telephone1,
        telephone2: responese.data.telephone2,
        address: responese.data.address,
        latitude: responese.data.latitude,
        longitude: responese.data.longitude
      }
      console.log("######`hospitalInfo", curHospitalInfo)
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
          <HospitalReport />
        ) : (
          <></>
        )}
      </ComponentContainer>
    </Container>
  );
}
export default Main;