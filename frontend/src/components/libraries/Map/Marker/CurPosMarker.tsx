import { useEffect, useState } from "react";
import { deleteMarker } from "/src/constants/function";
import { Tmapv3 } from "../Map";

function CurPosMarker(props: any) {
    const [count, setCount] = useState(2);
  
    useEffect(() => {
      const id = setInterval(() => {
        setCount((count) => count - 1);
      }, 1000);
      
      if(count === 0) {
        setCount(2);
        if (props.map !== undefined) {
            deleteMarker(2);
            var lonlat = new Tmapv3.LatLng(props.pos.lat, props.pos.lon);
            const size = new Tmapv3.Size(30, 30);
            const marker = new Tmapv3.Marker({
              position: lonlat,
              map: props.map,
              // color: positions[i].color,
              iconSize: size,
              icon: "/src/assets/hospital/map-marker-hospital.png",
              // label: title //Marker의 라벨.
            });
          }
      }
      return () => clearInterval(id);
    }, [count]);

  return <></>;
}

export default CurPosMarker;
