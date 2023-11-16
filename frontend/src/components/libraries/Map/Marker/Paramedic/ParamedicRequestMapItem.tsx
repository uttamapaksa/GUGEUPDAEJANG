import { useEffect, useRef } from "react";
import { deleteMarker } from "/src/constants/function";
import { Tmapv3 } from "../../Map";

function ParamedicRequestMapItem(props: any) {
  const circle = useRef<any>(null);

  const updateHospitalMarkers = () => {
    if (props.map !== undefined && props.hosList !== undefined) {
      for (var i = 0; i < props.hosList.length; i++) {
        var lonlat = new Tmapv3.LatLng(props.hosList[i].pos.lat, props.hosList[i].pos.lon);
        var title = props.hosList[i].name;
        let imgUrl;
        if (props.hosList[i].response !== undefined) {
          imgUrl =
            props.hosList[i].response === "accept"
              ? "/src/assets/share/accept-marker.png"
              : props.hosList[i].response === "refuse"
              ? "/src/assets/share/refuse-marker.png"
              : "/src/assets/share/wait-marker.png";
        } else {
          imgUrl = "/src/assets/share/map-marker.png";
        }
        const size = new Tmapv3.Size(30, 30);
        const marker = new Tmapv3.Marker({
          position: lonlat,
          // draggable: true,
          map: props.map,
          icon: imgUrl,
          iconSize: size,
          // icon: props.hosList[i].type,
          label: title, //Marker의 라벨.
        });
        marker.name = props.hosList[i].id;

      }
    }
  };

  useEffect(() => {
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
        icon: "/src/assets/share/map-marker.png",
        // label: title //Marker의 라벨.
      });
      if (circle.current) {
        console.log(circle);
        circle.current.setMap(null);
      }
      circle.current = new Tmapv3.Circle({
        center: new Tmapv3.LatLng(props.occurData.pos.lat, props.occurData.pos.lon),
        radius: props.occurData.radius,
        strokeWeight: 1,
        // fillColor: '#f2f4cb',
        fillColor: "rgba(242, 244, 203, 0.5)",
        map: props.map,
      });
      updateHospitalMarkers();
    }

  }, [props]);

  return <></>;
}

export default ParamedicRequestMapItem;
