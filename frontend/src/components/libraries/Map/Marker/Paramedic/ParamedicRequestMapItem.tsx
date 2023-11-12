import { useEffect, useState } from 'react';
import { deleteMarker } from '/src/constants/function';
import { Tmapv3 } from '../../Map';

function ParamedicRequestMapItem(props: any) {
  const [count, setCount] = useState(2);
  const updateHospitalMarkers = () => {
    if (props.map !== undefined && props.hosList !== undefined) {
      for (var i = 0; i < props.hosList.length; i++) {
        var lonlat = new Tmapv3.LatLng(props.hosList[i].pos.lat, props.hosList[i].pos.lon);
        // var title = props.hosList[i].name;
        let color;
        if (props.hosList[i].response !== undefined) {
          color =
            props.hosList[i].response === 'accept'
              ? '#37b829'
              : props.hosList[i].response === 'refuse'
              ? '#ff1500'
              : '#f6f157';
        } else {
          color = '#F66457';
        }
        const size = new Tmapv3.Size(30, 30);
        const marker = new Tmapv3.Marker({
          position: lonlat,
          draggable: true,
          map: props.map,
          color: color,
          iconSize: size,
          // icon: props.hosList[i].type,
          // label: title //Marker의 라벨.
        });
        marker.name = props.hosList[i].id;
        
        // //마커 이벤트 등록용
        // const tmp = props.hosList[i]
        // marker.on("Click", () => {
        //     setParaRequsetItem(tmp)
        // });
      }
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count - 1);
    }, 3000);

    if (count === 0) {
      setCount(2);
      if (props.map !== undefined) {
        deleteMarker(2);
        const size = new Tmapv3.Size(35, 35);
        //시작점
        const curPos = new Tmapv3.Marker({
          position: new Tmapv3.LatLng(props.pos.lat, props.pos.lon),
          map: props.map,
          // color: positions[i].color,
          iconSize: size,
          // icon: "/src/assets/hospital/map-marker-hospital.png",
          // label: title //Marker의 라벨.
        });
        // 사고위치
        const occurrencePos = new Tmapv3.Marker({
          position: new Tmapv3.LatLng(props.occurData.pos.lat, props.occurData.pos.lon),
          map: props.map,
          // color: positions[i].color,
          iconSize: size,
          icon: '/src/assets/share/map-marker.png',
          // label: title //Marker의 라벨.
        });
        const circle = new Tmapv3.Circle({
          center: new Tmapv3.LatLng(props.occurData.pos.lat, props.occurData.pos.lon),
          radius: props.occurData.radius,
          strokeWeight: 1,
          // fillColor: '#f2f4cb',
          fillColor: 'rgba(242, 244, 203, 0.2)',
          map: props.map,
        });
        updateHospitalMarkers();
      }
    }
    return () => clearInterval(id);
  }, [count]);

  return <></>;
}

export default ParamedicRequestMapItem;
