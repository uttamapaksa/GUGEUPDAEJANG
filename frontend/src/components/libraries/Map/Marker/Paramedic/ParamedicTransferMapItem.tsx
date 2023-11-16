import { useEffect, useState } from "react";
import { deleteMarker } from "/src/constants/function";
import { Tmapv3 } from "../../Map";

function ParamedicTransferMapItem(props: any) {
  const [count, setCount] = useState(3);

  // const [item, setItem] = useState<any>(undefined);
  // const [routeReturn, setRouteReturn] = useState<any>(undefined);

  // // 테스트용
  // const [idx, setIdx] = useState(0);

  // function getRP() {
  //   var s_latlng = new Tmapv3.LatLng(props.pos.lat + 0.0001 * idx, props.pos.lon + 0.0001 * idx);
  //   var e_latlng = new Tmapv3.LatLng(props.endPos.lat, props.endPos.lon);

  //   var optionObj = {
  //     reqCoordType: "WGS84GEO", //요청 좌표계 옵셥 설정입니다.
  //     resCoordType: "WGS84GEO", //응답 좌표계 옵셥 설정입니다.
  //     trafficInfo: "Y",
  //   };

  //   // TData 객체 생성
  //   var tData = new Tmapv3.extension.TData();

  //   // TData 객체의 경로요청 함수
  //   tData.getRoutePlanJson(s_latlng, e_latlng, optionObj, {
  //     onComplete: (responseData: any) => onComplete(responseData),
  //     onProgress: onProgress,
  //     onError: onError,
  //   });
  // }

  // const onComplete = (responseData: any) => {
  //   console.log(responseData);
  //   if (item !== undefined && item.polylines !== undefined) {
  //     item.polylines.forEach((element: any) => {
  //       element.setMap(null);
  //     });
  //   }
  //   var jsonObject = new Tmapv3.extension.GeoJSON();
  //   if (jsonObject !== undefined && responseData !== undefined) {
  //     var jsonForm = jsonObject.rpTrafficRead(responseData._responseData);
  //     var trafficColors = {
  //       // 교통정보 옵션 - 라인색상
  //       trafficDefaultColor: "#000000", //교통 정보가 없을 때
  //       trafficType1Color: "#009900", //원할
  //       trafficType2Color: "#7A8E0A", //서행
  //       trafficType3Color: "#8E8111", //정체
  //       trafficType4Color: "#FF0000", //정체
  //     };
  //     jsonObject.drawRouteByTraffic(props.map, jsonForm, trafficColors, setRouteItem);
  //     setRouteReturn({distance: responseData._responseData.features[0].properties.totalDistance, time: responseData._responseData.features[0].properties.totalTime})
  //     // console.log(responseData._responseData.features[0].properties.totalDistance,
  //     //   responseData._responseData.features[0].properties.totalTime);
  //   }
  //   // setRouteReturn()
  // };

  // function onProgress() { }

  // const setRouteItem = (evt: any) => {
  //   setItem(evt);
  //   console.log(evt)
  // }

  // function onError() {
  //   alert("onError");
  // }

  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count - 1);
    }, 3000);

    if (count === 0) {
      setCount(5);
      if (props.map !== undefined) {
        deleteMarker(2);
        const size = new Tmapv3.Size(35, 35);
        // setIdx(idx + 1)
        // getRP();
        // console.log(routeReturn)
        //시작점
        const curPos = new Tmapv3.Marker({
          position: new Tmapv3.LatLng(props.pos.lat, props.pos.lon),
          map: props.map,
          // color: positions[i].color,
          iconSize: size,
          icon: "/src/assets/share/map-marker.png",
          // icon: "/src/assets/hospital/map-marker-hospital.png",
          // label: title //Marker의 라벨.
        });
        // 도착점
        const hosPos = new Tmapv3.Marker({
          position: new Tmapv3.LatLng(props.endPos.lat, props.endPos.lon),
          map: props.map,
          // color: positions[i].color,
          iconSize: size,
          icon: "/src/assets/hospital/map-marker-hospital.png",
          //
        });
      }
    }
    return () => clearInterval(id);
  }, [count]);

  return <></>;
}

export default ParamedicTransferMapItem;
