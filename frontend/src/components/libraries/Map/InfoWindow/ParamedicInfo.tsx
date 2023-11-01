import { renderToString } from "react-dom/server";
import { Tmapv3 } from "../Map";
import InfoContents from "./InfoContents";
import { ParamedicInfoContainer } from "./ParamedicInfo.style";
import { useEffect, useState } from 'react';


function ParamedicInfo(props: any) {
    const [paraInfo, setParaInfo] = useState<any[]>([]);
    // const [addr, setAddr] = useState<string>();

    // const loadGetLonLatFromAddress = useCallback(
    //     (lat: number, lan: number) => {
    //         let tData = new Tmapv3.extension.TData();
    //         let optionObj = {
    //             coordType: "WGS84GEO",       //응답좌표 타입 옵션 설정 입니다.
    //             addressType: "A04"           //주소타입 옵션 설정 입니다.
    //         };
    //         let params = {
    //             onComplete: onComplete,
    //             onProgress: onProgress,
    //             onError: onError
    //         };
    //         // TData 객체의 리버스지오코딩 함수
    //         return tData.getAddressFromGeoJson(lat, lan, optionObj, params);
    //     },
    //     [parList],
    // )

    // const onComplete = () =>{
    //     console.log(this._responseData.addressInfo.fullAddress)
    //     setAddr('현재 지도의 중심 좌표주소 : ' + this._responseData.addressInfo.fullAddress);
    //     console.log(this._responseData);
    // }

    // const onProgress = () => {
    //     //alert("onComplete");
    // }

    // const onError = () => {
    //     alert("onError");
    // }

    // useEffect(() => {
    //     console.log(renderToString(
    //         <InfoContents
    //             id={props.parList[0].id}
    //             ktas={props.parList[0].ktas}
    //             addr={props.parList[0].addr}
    //             requestAt={props.parList[0].requestAt}
    //             elapseMin={props.parList[0].elapseMin}
    //             leftTime={props.parList[0].leftTime}
    //         />
    //     ))
    // }, [])
    const updateInfo = () => {
        if (props.map !== undefined && props.parList !== undefined) {
            let info: any[] = []
            for (var i = 0; i < props.parList.length; i++) {
                var lonlat = new Tmapv3.LatLng(props.parList[i].pos.lat, props.parList[i].pos.lon);
                const infoWindow = new Tmapv3.InfoWindow({
                    position: lonlat = lonlat,
                    offset: new Tmapv3.Point(0, -30),
                    content: renderToString(
                        <InfoContents
                            id={props.parList[i].id}
                            ktas={props.parList[i].ktas}
                            addr={props.parList[i].addr}
                            requestAt={props.parList[i].requestAt}
                            elapseMin={props.parList[i].elapseMin}
                            leftTime={props.parList[i].leftTime}
                        />
                    ),
                    border: '0px solid #ffffff',
                    type: 2,
                    map: props.map
                });
                info.push(infoWindow);
            }
            setParaInfo(info);
        }
    }
    const deleteInfo = () => {
        for (let i = 0; i < paraInfo.length; i++) {
            paraInfo[i].setMap(null);
        }
        setParaInfo([]);
    }
    useEffect(() => {
        if (props.map !== undefined && props.parList !== undefined) {
            deleteInfo();
            updateInfo();
        }
    }, [props]);

    return (
        <ParamedicInfoContainer>
        </ParamedicInfoContainer>
    );
}

export default ParamedicInfo;