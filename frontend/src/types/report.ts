export interface HeaderType {
  today: number;
	todayApproved: number;
	todayRejected: number;
	avgResponseTime: number;
	avgTransferTime: number;
}

export interface AgeType{
  totalCountList:number[];
  maleCountList:number[];
  femaleCountList:number[];
}

export interface StatusType{
  dailyStatusList: number[]
}

export interface TimeType{
  callingPerTimeList: number[];
}

export interface ResponseType{
  total:number[];
  approved:number[];
}

export interface KtasType{
  ktas1:number[];
  ktas2:number[];
  ktas3:number[];
  ktas4:number[];
  ktas5:number[];
}

export interface AgreeChartProps {
  selectedYear: string;
  setSelectedYear: React.Dispatch<React.SetStateAction<string>>;
  responseValue: ResponseType;
}