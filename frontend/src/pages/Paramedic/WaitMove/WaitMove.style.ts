import styled from 'styled-components';
import theme from '/src/styles';

// templates
export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* border: 3px solid black; */
`;

export const Wrapper = styled.div`
  display: flex;
  /* border: 3px solid red; */
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ParamedicHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 3px solid green; */
  width: 100%;
  height: 7vh;
`;

export const Map = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid green;
  width: 100%;
  height: 40vh;
  font-size: 3vh;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid orange;
  width: 100%;
  border-radius: 2vh 2vh 0 0;
`;

// molecules
export const OpenCloseToggle = styled.div`
  display: flex;
  align-items: end;
  /* border: 3px solid green; */
  width: 100%;
  height: 3vh;
`;

export const Time = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 3px solid green; */
  width: 90%;
  padding: 0vh 5%;
  height: 5vh;
`;

export const HospitalList = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 3px solid skyblue; */
  width: 95%;
  padding-bottom: 2vh;
`;

export const ListTitle = styled.div`
  display: flex;
  align-items: center;
  /* border: 3px solid green; */
  width: 100%;
  height: 3vh;
  font-size: 2vh;
  font-weight: 400;
`;

export const HospitalItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 3px solid green; */
  width: 100%;
  height: 15vh;
  font-size: 2vh;
`;

export const TotalInformation = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* border: 3px solid green; */
  width: 100%;
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
  display: flex;
  justify-content: center;
  /* border: 3px solid purple; */
  width: 10%;
  height: 80%;
`;

export const ItemTitle = styled.div`
  /* border: 3px solid purple; */
  padding: 1vh 0;
  display: flex;
  align-items: center;
  height: 2.5vh;
  font-size: 2.5vh;
  font-weight: 700;
  /* height: 5vh;
  font-size: 4vh;
  font-weight: 700; */
`;

export const ItemCallTime = styled.div`
  /* border: 3px solid purple; */
  margin: 0 1vh;
  padding: 1vh 0;
  display: flex;
  align-items: center;
  color: #393d50;
  height: 2.5vh;
  font-size: 2vh;
  /* height: 5vh;
  font-size: 2vh; */
`;
export const ItemCallTimeBig = styled.div`
  /* border: 3px solid purple; */
  margin-left: 1vh;
  padding: 1vh 0;
  display: flex;
  align-items: center;
  height: 5vh;
  color: #393d50;
  font-size: 2vh;
`;

export const ItemNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${theme.color.grayDarkest};
  border-radius: 15px;
  /* width: 40%; */
  padding: 0 1.2vh;
  height: 5vh;
  font-size: 2vh;
`;

export const ItemDist = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 3px solid purple; */
  width: 15%;
  height: 5vh;
`;

export const ItemTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 3px solid purple;s */
  width: 15%;
  height: 5vh;
`;

export const BtnToggle = styled.div`
  /* border: 3px solid purple; */
  width: 25%;
  height: 8vh;
`;

export const Move1 = styled.div`
  /* border: 3px solid purple; */
  margin: 1.5vh 0 0 1vh;
  width: 100%;
  height: 2vh;
  color: #393d50;
  font-size: 2vh;
`;
export const Move2 = styled.div`
  /* border: 3px solid purple; */
  margin: 10px;
  padding: 1vh 1.5vh;
  width: 100%;
  font-size: 2.5vh;
`;

export const BtnMediaRecord = styled.div`
  /* border: 3px solid purple; */
  margin-top: 1vh;
  width: 40%;
  height: 70%;
`;
