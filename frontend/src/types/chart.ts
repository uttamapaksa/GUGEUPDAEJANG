export interface AgreeRequestData {
  [year: string]: {
    totalRequests: number[];
    acceptedRequests: number[];
  }
}

export interface  CharacterRequestData {
  age: number[] | undefined;
  male: number[] | undefined;
  female: number[] | undefined;
};