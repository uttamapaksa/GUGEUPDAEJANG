import styled from 'styled-components';

// templates
export const Container = styled.div`
  display: flex;
  justify-content: center;
  border: 3px solid black;
`;

export const Wrapper = styled.div`
  display: flex;
  border: 3px solid red;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ParamedicHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid green;
  width: 100%;
  height: 7vh;
`;

export const Map = styled.div`
  display: flex;
  border: 3px solid green;
  width: 100%;
  height: 40vh;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid orange;
  width: 100%;
`;

// molecules
export const OpenCloseToggle = styled.div`
  display: flex;
  border: 3px solid green;
  width: 100%;
  height: 2vh;
`;

export const Time = styled.div`
  display: flex;
  border: 3px solid green;
  width: 100%;
  height: 5vh;
`;

export const HospitalList = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid skyblue;
  width: 95%;
  padding-bottom: 2vh;
`;

export const ListTitle = styled.div`
  display: flex;
  border: 3px solid green;
  width: 100%;
  height: 3vh;
  `;

export const HospitalItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border: 3px solid green;
  width: 100%;
  height: 15vh;
`;

export const TotalInformation = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 3px solid green;
  width: 95%;
  padding-bottom: 2vh;
`;

export const Calling = styled.div`
  display: flex;
  justify-content: space-evenly;
  border: 3px solid green;
  width: 95%;
  height: 8vh;
  padding-bottom: 2vh;
`;

// atoms
export const TxtHeaderTitle = styled.div`
  border: 3px solid purple;
  width: 50%;
  height: 80%;
`;

export const Arrow = styled.div`
  border: 3px solid purple;
  width: 10%;
  height: 80%;
`;

export const ItemTitle = styled.div`
  overflow: break-word;
  border: 3px solid purple;
  width: 80%;
  height: 5vh;
`;

export const ItemCallTime = styled.div`
  border: 3px solid purple;
  width: 18%;
  height: 5vh;
`;

export const ItemNumber = styled.div`
  border: 3px solid purple;
  width: 40%;
  height: 5vh;
`;

export const ItemDist = styled.div`
  border: 3px solid purple;
  width: 15%;
  height: 5vh;
`;

export const ItemTime = styled.div`
  border: 3px solid purple;
  width: 15%;
  height: 5vh;
`;

export const BtnToggle = styled.div`
  border: 3px solid purple;
  width: 25%;
  height: 8vh;
`;

export const Move1 = styled.div`
  margin-top: 1vh;
  border: 3px solid purple;
  width: 90%;
  height: 2vh;
`;
export const Move2 = styled.div`
  margin-top: 1vh;
  border: 3px solid purple;
  width: 90%;
  height: 4vh;
`

export const BtnMediaRecord = styled.div`
  margin-top: 1vh;
  border: 3px solid purple;
  width: 40%;
  height: 70%;
`;
