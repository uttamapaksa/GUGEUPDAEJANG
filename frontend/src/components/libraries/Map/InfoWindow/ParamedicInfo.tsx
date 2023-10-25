import { renderToString } from "react-dom/server";
import { MapProps, Tmapv3 } from "../Map";
import InfoContents from "./InfoContents";
import { ParamedicInfoContainer } from "./ParamedicInfo.style";
import { useEffect } from 'react';


function ParamedicInfo(props: any) {
    useEffect(() => {
        console.log(props)
        if(props.parList!==undefined && props.map!==undefined){
            for (var i = 0; i < props.parList.length; i++) {//for문을 통하여 배열 안에 있는 값을 마커 생성
                var lonlat =  new Tmapv3.LatLng(props.parList[i].pos.lat, props.parList[i].pos.lon);
                var title = props.parList[i].name;
                const size = new Tmapv3.Size(30, 30);
                console.log(props.parList[i])
                // console.log(lonlat)
                //Marker 객체 생성.
                const infoWindow = new Tmapv3.InfoWindow({
                    position: lonlat = lonlat, //Popup 이 표출될 맵 좌표
                    offset: new Tmapv3.Point(0, -30),
                    content: renderToString(
                        <InfoContents
                        />
                      ),
                    border: '0px solid #ffffff',
                    type: 2, //Popup의 type 설정.
                    map: props.map //Popup이 표시될 맵 객체
                });
    
            }
        }

    }, [props]);

    return (
        <ParamedicInfoContainer>
        </ParamedicInfoContainer>
    );
}

export default ParamedicInfo;


{/* <div style='position: absolute; bottom: 0; left: 50%; transform: translate(-50%, 0); display: flex; background-color: #ffffffea; box-shadow: 1px 5px 5px 5px #3b3b3b40; font-size: 12px; border-radius: 10px; flex-direction: column; width : 250px; '>
    <div style='position: absolute; display: flex; top: 0; right: 0; width: 60px; height: 30px; background-color:${"red"} ; border-radius: 0 10px 0 5px; color: #ffffff; align-items: center; justify-content: center;'>
        ${"KTAS2"}
    </div>
    <div style='position: absolute; bottom: -33px; left: 50%; transform: translate(-50%, 0); width: 0; height: 0; border-bottom: 20px solid transparent; border-top: 20px solid #ffffffea; border-left: 20px solid transparent; border-right: 20px solid transparent;' >
    </div>
    <div class='info-box' style='width: 100%;'>
        <p style='display: flex; flex-direction: column; margin-bottom: 3px; padding: 0 10px; overflow: hidden;'>
            <span class='tit' style=' font-size: 13px; font-weight: bold;'>
                ${"대전 유성구 학하남로 10"}
            </span>
            <span class='new-addr'>
                ${11.5}km
            </span>
        </p>
        <p style='display: flex; flex-direction: row; padding: 0 10px; '>
            <span class='old-addr' style='color: #707070; text-align: left; width: 50%;'>
                ${"오전 01:34"}
            </span>
            <span class='old-addr' style='color: #707070; text-align: right; width: 50%;'>
                요청 대기 ${3}분 경과
            </span>
        </p>
        <hr style='border-width: 0; height: 0.5px; width:100%; background-color: #8a8a8a;' />
        <p style='display: flex; flex-direction: row; padding: 0 10px; '>
            <span class='old-addr' style='color: #F44336; width:100%; text-align: right;'>
                ${20}분 이내 도착 가능
            </span>
        </p>
    </div>
</div> */}