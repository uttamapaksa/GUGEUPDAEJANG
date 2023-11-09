import { useEffect, useState } from "react";
import { deleteMarker } from "/src/constants/function";
import { Tmapv3 } from "../../Map";

function ParamedicTransferMapItem(props: any) {
  const [count, setCount] = useState(2);

  function getRP() {
    var s_latlng = new Tmapv3.LatLng(props.pos.lat, props.pos.lon);
    var e_latlng = new Tmapv3.LatLng(props.endPos.lat, props.endPos.lon);

    var optionObj = {
      reqCoordType: "WGS84GEO", //요청 좌표계 옵셥 설정입니다.
      resCoordType: "WGS84GEO", //응답 좌표계 옵셥 설정입니다.
      trafficInfo: "Y",
    };

    // TData 객체 생성
    var tData = new Tmapv3.extension.TData();

    // TData 객체의 경로요청 함수
    tData.getRoutePlanJson(s_latlng, e_latlng, optionObj, {
      onComplete: (responseData:any) => onComplete(responseData),
      onProgress: onProgress,
      onError: onError
    });
  }

  const onComplete = (responseData:any) => {
    console.log(responseData);

    var jsonObject = new Tmapv3.extension.GeoJSON();
    var jsonForm = jsonObject.rpTrafficRead(responseData);
    //교통정보 표출시 생성되는 LineColor 입니다.
    var trafficColors = {
      // 사용자가 임의로 색상을 설정할 수 있습니다.
      // 교통정보 옵션 - 라인색상
      trafficDefaultColor: "#000000", //교통 정보가 없을 때
      trafficType1Color: "#009900", //원할
      trafficType2Color: "#7A8E0A", //서행
      trafficType3Color: "#8E8111", //정체
      trafficType4Color: "#FF0000", //정체
    };
    jsonObject.drawRouteByTraffic(props.map, jsonForm, trafficColors);
    props.map.setCenter(new Tmapv3.LatLng(props.pos.lat, props.pos.lon));
    props.map.setZoom(13);
  };

  function onProgress() {}

  function onError() {
    alert("onError");
  }

  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);

    if (count === 0) {
      setCount(2);
      if (props.map !== undefined) {
        deleteMarker(2);
        // var lonlat = new Tmapv3.LatLng(props.pos.lat, props.pos.lon);
        // const size = new Tmapv3.Size(30, 30);
        // const marker = new Tmapv3.Marker({
        //   position: lonlat,
        //   map: props.map,
        //   // color: positions[i].color,
        //   iconSize: size,
        //   icon: "/src/assets/hospital/map-marker-hospital.png",
        //   // label: title //Marker의 라벨.
        // });
        getRP();
      }
    }
    return () => clearInterval(id);
  }, [count]);

  return <></>;
}

export default ParamedicTransferMapItem;
