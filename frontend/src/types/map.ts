
export interface Position { 
  lat: number, 
  lon: number 
}

export interface HospitalItem {
    id: number,
    name: string,
    pos: Position,
    phone: string,
    requestTime: string,
    remainBed: number,
    response?: boolean,
}

export interface ParamedicItem {
    id: number,
    addr: string,
    pos: Position,
    ktas: string,
    elapseMin: number,
    leftTime: number,
    dist: number,
    paraType: string,
    paraTag: string[],
    paraInfo: string,
    requestAt?: string,
}

export interface MapProps {
    type: string,
    pos: Position,
    hosList?: HospitalItem[],
    parList?: ParamedicItem[],
}

export interface GuestMapProps {
  mapProps: MapProps | undefined;
  setMapProps: React.Dispatch<React.SetStateAction<MapProps | undefined>>;
}
