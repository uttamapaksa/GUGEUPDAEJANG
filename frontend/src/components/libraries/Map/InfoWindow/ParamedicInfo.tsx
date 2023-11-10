import { renderToString } from "react-dom/server";
import { Tmapv3 } from "../Map";
import InfoContents from "./InfoContents";
import { useEffect, useState } from 'react';


function ParamedicInfo(props: any) {
    const updateInfo = () => {
        if (props.map !== undefined && props.paraRequestList !== undefined) {
            // let info: any[] = []
            for (var i = 0; i < props.paraRequestList.length; i++) {
                var lonlat = new Tmapv3.LatLng(props.paraRequestList[i].latitude, props.paraRequestList[i].longitude);
                const infoWindow = new Tmapv3.InfoWindow({
                    position: lonlat,
                    offset: new Tmapv3.Point(0, -30),
                    content: renderToString(
                        <InfoContents {...props.paraRequestList[i]}/>
                    ),
                    border: '0px solid #ffffff',
                    type: 2,
                    map: props.map
                });
            }
        }
    }
    useEffect(() => {
        if (props.map !== undefined && props.paraRequestList !== undefined) {
            console.log("~~~~~~~~~~~~updateInfo", props)
            updateInfo();
        }
    }, [props]);

    return (
        <></>
    );
}

export default ParamedicInfo;