import { useEffect, useState } from "react";
import Map, { MapProps, Position } from "../../../components/libraries/Map/Map";
import styled from "styled-components";

function Main() {
    const [mapProps, setMapProps] = useState<MapProps>();
    const selectMarker = (markerId: number) => {
        return markerId;
    };
    
    const setProps = () => {
        const guestMarker: MapProps = {
            type: "hospital",
            pos: { lat: 37.56520450, lon: 126.98702028 },
            parList: [//다중 마커 저장 배열
                {
                    id: 1,
                    name: '티맵모빌리티',
                    pos: { lat: 37.56520450, lon: 126.98702028 }, //좌표 지정
                    ktas: 1,
                    requestAt: new Date(),
                },
                {
                    id: 2,
                    name: 'SKT타워',
                    pos: { lat: 37.566369, lon: 126.984895 },
                    ktas: 2,
                    requestAt: new Date(),
                },
                {
                    id: 3,
                    name: '경찰서',
                    pos: { lat: 37.563709, lon: 126.989577 },
                    ktas: 3,
                    requestAt: new Date(),
                },
                {
                    id: 4,
                    name: '호텔',
                    pos: { lat: 37.565138, lon: 126.983655 },
                    ktas: 4,
                    requestAt: new Date(),
                },
                {
                    id: 5,
                    name: '병원',
                    pos: { lat: 37.565128, lon: 126.988830 },
                    ktas: 5,
                    requestAt: new Date(),
                }
            ],
            selectMarker: selectMarker
        }
        setMapProps(guestMarker);
    }

    useEffect(() => {
        setProps();
    }, [])


    return (
        <Container>
            {mapProps !== undefined ?
                <Map {...mapProps}></Map> :
                <>zzzzzzzzzzzzzz</>}
        </Container>
    );
}

export default Main;

export const Container = styled.div`
  width: 70vw;
  height: 80vh;
  position: fixed;
`;