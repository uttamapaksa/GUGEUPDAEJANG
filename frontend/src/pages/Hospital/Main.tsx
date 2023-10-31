import { useEffect, useState } from "react";
import { MapProps, ParamedicItem } from "../../components/libraries/Map/Map";
import useGeolocation from "react-hook-geolocation";
import HopsitalHeader from "/src/components/Hospital/HospitalHeader/HopsitalHeader";
import HopsitalSidebar from "/src/components/Hospital/HospitalSidebar/HopsitalSidebar";
import { useRecoilValue } from "recoil";
import { hospitalComponentType } from "/src/components/Hospital/HospitalAtoms";
import HospitalMain from "/src/components/Hospital/Main/HospitalMain";
import { ComponentContainer, Container } from "./Main.style";

const parList = [
  //다중 마커 저장 배열
  {
    id: 1,
    addr: "주소",
    pos: { lat: 37.5652045, lon: 126.98702028 }, //좌표 지정
    ktas: "ktas1",
    elapseMin: 14,
    leftTime: 10,
    dist: 10,
    paraType: "청년 (여)",
    paraTag: ["추락", "과다출혈", "아픔", "많이 아픔", "골절", "타박상", "복합골절"],
    paraInfo: "2층 높이 추락 사고 20대 여성 머리 출혈 환자 발생하였습니다.\n심정지 이력이 있는 환자입니다. 비상비상비상비상비상비상비상비상비상zzzzzzzzzzz비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상xxxxxxxxxxxx비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상비상",
    requestAt: "오전 01:34",
  },
  {
    id: 2,
    addr: "부산광역시 강서구 녹산산단382로14번가길 10~29번지(송정동)",
    pos: { lat: 37.566369, lon: 126.984895 },
    ktas: "ktas2",
    elapseMin: 8,
    leftTime: 19,
    dist: 15,
    paraType: "청년 (여)",
    paraTag: ["추락", "과다출혈"],
    paraInfo: "2층 높이 추락 사고 20대 여성 머리 출혈 환자 발생하였습니다.\n심정지 이력이 있는 환자입니다.",
    requestAt: "오전 01:51",
  },
  {
    id: 3,
    addr: "부산광역시 강서구 녹산산단382로14번가길 10~29번지(송정동)",
    pos: { lat: 37.563709, lon: 126.989577 },
    ktas: "ktas3",
    elapseMin: 19,
    leftTime: 31,
    dist: 4,
    paraType: "청년 (여)",
    paraTag: ["추락", "과다출혈"],
    paraInfo: "2층 높이 추락 사고 20대 여성 머리 출혈 환자 발생하였습니다.\n심정지 이력이 있는 환자입니다.",
    requestAt: "오전 02:04",
  },
  {
    id: 4,
    addr: "주소",
    pos: { lat: 37.565138, lon: 126.983655 },
    ktas: "ktas4",
    elapseMin: 21,
    leftTime: 24,
    dist: 6,
    paraType: "청년 (여)",
    paraTag: ["추락", "과다출혈"],
    paraInfo: "2층 높이 추락 사고 20대 여성 머리 출혈 환자 발생하였습니다.\n심정지 이력이 있는 환자입니다.",
    requestAt: "오전 01:19",
  },
  {
    id: 5,
    addr: "주소",
    pos: { lat: 37.565128, lon: 126.98883 },
    ktas: "ktas5",
    elapseMin: 4,
    leftTime: 11,
    dist: 19,
    paraType: "청년 (여)",
    paraTag: ["추락", "과다출혈"],
    paraInfo: "2층 높이 추락 사고 20대 여성 머리 출혈 환자 발생하였습니다.\n심정지 이력이 있는 환자입니다. 비사아아ㅏ아아아아아아ㅏㅏㅏㅏㅏㅏㅏㅏㅏ앙",
    requestAt: "오전 01:31",
  },
];

function Main() {
  const [mapProps, setMapProps] = useState<MapProps>();
  const componentType = useRecoilValue(hospitalComponentType);

  //통신 이전 테스트용 더미 데이터 -----
  const [counter, setCounter] = useState(0);
  const [dummyData, setDummyData] = useState<ParamedicItem[]>(parList);

  const geolocation = useGeolocation();

  useEffect(() => {
    setProps();
  }, [])

  useEffect(() => {
    if (componentType[0]) {
      const cnt = setInterval(() => {
        // 타이머 숫자가 하나씩 줄어들도록
        setCounter((counter) => counter - 1);
      }, 1000);

      if (counter == 0) {
        // console.log(counter);
        setCounter(1);
        setProps();
      }
      return () => clearInterval(cnt);
    }
  }, [counter, componentType]);
  // ----------------------------------

  const setProps = () => {
    let nextData: ParamedicItem[] = [];

    dummyData.forEach((item) => {
      const dx = (5 - Math.floor(Math.random() * 10 + 1)) * 0.0001;
      const dy = (5 - Math.floor(Math.random() * 10 + 1)) * 0.0001;
      const nx = item.pos.lat + dx;
      const ny = item.pos.lon + dy;
      nextData.push({
        id: item.id,
        addr: item.addr,
        pos: { lat: nx, lon: ny },
        ktas: item.ktas,
        elapseMin: item.elapseMin,
        leftTime: item.leftTime,
        dist: item.dist,
        paraType: item.paraType,
        paraTag: item.paraTag,
        paraInfo: item.paraInfo,
        requestAt: item.requestAt,
      });
    });

    let clat = 37.565128;
    let clon = 126.98883;
    if (geolocation !== undefined) {
      clat = geolocation.latitude;
      clon = geolocation.longitude;
    }

    setDummyData(nextData);

    const nextMapProps: MapProps = {
      type: "hospital",
      pos: { lat: clat, lon: clon },
      parList: nextData,
    };
    setMapProps(nextMapProps);
  };

  return !geolocation.error ? (
    <Container>
      <HopsitalHeader />
      <HopsitalSidebar />
      <ComponentContainer>
        {componentType[0] ? (
          <>{mapProps !== undefined ? <HospitalMain {...mapProps} /> : <></>}</>
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