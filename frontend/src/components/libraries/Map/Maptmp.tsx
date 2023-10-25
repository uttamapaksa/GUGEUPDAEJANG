// import { useEffect, useState } from "react";
// import { MapContainer } from "./Map.style";
// import ParamedicInfo from "./InfoWindow/ParamedicInfo";

// declare global {
//     interface Window {
//         Tmapv3: any;
//     }
// }

// const { Tmapv3 } = window;
// export const createMap = (lat: number, lon: number) => {
//     return new Tmapv3.Map("TMap", {
//         // 지도의 폭
//         width: "100%",
//         // 지도의 높이
//         height: "100%",
//         // 지도의 범위
//         zoom: 16,
//         zIndexMarker: 5,
//         zIndexInfoWindow: 10,
//     }).setCenter(new Tmapv3.LatLng(lat, lon));
// }

// //지도 제거
// export const destroyMap = () => {
//     const curMap = document.querySelector("#TMap > div:nth-child(2)");
//     if (curMap !== null) {
//         curMap.remove();
//     }
// }
// // export const selectMarker = (markerId: number) => {
// //     return markerId;
// // }
// //타입
// export interface Position { lat: number, lon: number };
// export interface MapProps {
//     type: string,
//     pos: Position
//     hosList?: [
//         {
//             id: number,
//             name: string,
//             pos: Position,
//             response?: boolean,
//         },
//     ],
//     parList?: [
//         {
//             id: number,
//             name: string,
//             pos: Position,
//             ktas: number,
//             requestAt: Date,
//         },
//     ],
//     selectMarker: (markerId: number) => number;
// }
// export interface GuestMarkerProps {
//     pos: Position
//     hosList?: [
//         {
//             id: number,
//             name: string,
//             pos: Position,
//             response?: boolean,
//         },
//     ],
//     selectMarker: (markerId: number) => number;
// }
// export interface ParamedicMarkerProps {
//     pos: Position
//     hosList?: [
//         {
//             id: number,
//             name: string,
//             pos: Position,
//             response?: boolean,
//         },
//     ],
//     selectMarker: (markerId: number) => number;
// }
// export interface HospitalMarkerProps {
//     pos: Position
//     parList?: [
//         {
//             id: number,
//             name: string,
//             pos: Position,
//             ktas: number,
//             requestAt: Date,
//         },
//     ],
//     selectMarker: (markerId: number) => number;
// }
// export interface HospitalInfoProps {
//     pos: Position
//     parList?: [
//         {
//             id: number,
//             name: string,
//             pos: Position,
//             ktas: number,
//             requestAt: Date,
//         },
//     ],
//     selectMarker: (markerId: number) => number;
// }

// //props.type 의 구분에 따라 지도 반응형 크기 및 하위 컴포넌트 적용
// function Map(props: MapProps) {
//     const [guestMarkerProps, setGuestMarkerProps] = useState<GuestMarkerProps>();
//     const [paramedicMarkerProps, setParamedicMarkerProps] = useState<ParamedicMarkerProps>();
//     const [hospitalMarkerProps, setHospitalMarkerProps] = useState<HospitalMarkerProps>();
//     const [hospitalInfoProps, setHospitalInfoProps] = useState<HospitalInfoProps>();

//     const setProps = () => {
//         const guestMarker = {
//             pos : props.pos,
//             hosList : props.hosList,
//             selectMarker : props.selectMarker
//         }
//         setGuestMarkerProps(guestMarker);
//         const paramedicMarker = {
//             pos : props.pos,
//             hosList : props.hosList,
//             selectMarker : props.selectMarker
//         }
//         setParamedicMarkerProps(paramedicMarker);
//         const hospitalMarker = {
//             pos : props.pos,
//             hosList : props.hosList,
//             selectMarker : props.selectMarker
//         }
//         setHospitalMarkerProps(hospitalMarker);
//         const hospitalInfo = {
//             pos : props.pos,
//             hosList : props.hosList,
//             selectMarker : props.selectMarker
//         }
//         setHospitalInfoProps(hospitalInfo);

//     }

//     useEffect(() => {
//         setProps();
//         createMap(props.pos.lat, props.pos.lon);
//     }, []);

//     return (
//         <MapContainer id="TMap">
//             {props.type === "guest" ? <></> : <></>}
//             {props.type === "paramedic" ? <></> : <></>}
//             {/* {props.type === "hospital" ? <ParamedicInfo ></ParamedicInfo> : <></> */}

//         </MapContainer >
//     );
// }

// export default Map;