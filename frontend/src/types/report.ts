export interface HeaderType {
  today: number;
	todayApproved: number;
	todayRejected: number;
	avgResponseTime: number;
	avgTransferTime: number;
}

export interface TimeType{
  callingPerTimeList: number[];
}

export interface StatusType{
  dailyStatusList: number[]
}

export interface AgeType{
  totalCountList:number[];
  maleCountList:number[];
  femaleCountList:number[];
}

export interface ResponseType{
  total:number[];
  approved:number[];
}

export interface AgreeChartProps {
  selectedYear: string;
  setSelectedYear: React.Dispatch<React.SetStateAction<string>>;
  response: ResponseType;
}