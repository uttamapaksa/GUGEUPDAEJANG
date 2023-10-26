import { useEffect, useState } from "react";
import { MapProps, ParamedicItem, Tmapv3 } from "../Map";
import { ParamedicMarkerContainer } from "./ParamedicMarker.style";
import { useRecoilValue } from "recoil";
import { mapData } from "../mapAtom";

function ParamedicMarker(props: any) {
    const [parDictionary, setParDictionary] = useState<any>({});
    // const map = useRecoilValue(mapData);
    useEffect(() => {
        console.log(props)
        if(props.parList!==undefined && props.map!==undefined){
            //parDictionary에서 props에는 없는 요소는 제거
            //for()
            
            for (var i = 0; i < props.parList.length; i++) {
                var lonlat =  new Tmapv3.LatLng(props.parList[i].pos.lat, props.parList[i].pos.lon);
                var title = props.parList[i].name;
                const size = new Tmapv3.Size(30, 30);
                console.log(props.parList[i])
                if(parDictionary.hasOwnProperty(props.parList[i].id)){
                    parDictionary[props.parList[i].id].setPosition(lonlat);
                }
                else{
                    const marker = new Tmapv3.Marker({
                        position: lonlat,
                        map: props.map,
                        // color: positions[i].color,
                        iconSize: size,
                        // icon: props.parList[i].type,
                        // label: title //Marker의 라벨.
                    });
                    setParDictionary({...parDictionary, [props.parList[i].id] : marker })
                }
            }
        }

    }, [props]);

    return (
        <ParamedicMarkerContainer>
        </ParamedicMarkerContainer>
    );
}

export default ParamedicMarker;