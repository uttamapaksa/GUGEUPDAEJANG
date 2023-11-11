export interface AgreeRequestData {
  [year: string]: {
    totalRequests: number[];
    acceptedRequests: number[];
  }
}

export interface  CharacterRequestData {
  age: number[];
  male: number[];
  female: number[];
};