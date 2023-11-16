import styled from 'styled-components';
import theme from '/src/styles';

export const HospitalList = styled.div`
  /* border: 3px solid skyblue; */
  display: flex;
  flex-direction: column;
  width: 95%;
  padding-bottom: 10vh;
`;

export const TotalInformation = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-wrap: wrap;
  /* border: 3px solid green; */
  width: 100%;
  padding-bottom: 2vh;
`;

export const ItemTitle = styled.div`
  /* border: 3px solid purple; */
  padding: 1vh 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 4vh;
  font-weight: 700;
`;

export const ItemCallTime = styled.div`
  border: 3px solid purple;
  display: flex;
  align-items: center;
  color: #393d50;
  font-size: 3vh;
`;
export const ItemCallTimeBig = styled.div`
  /* border: 3px solid purple; */
  margin-left: 1vh;
  display: flex;
  width: 100%;
  align-items: center;
  color: #393d50;
  font-size: 2.5vh;
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
  /* border: 3px solid purple; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 5vh;
`;

export const ItemTime = styled.div`
  /* border: 3px solid purple; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 5vh;
`;

export const Move1 = styled.div`
  /* border: 3px solid purple; */
  margin: 4vh 1vh 1.5vh;
  width: 100%;
  height: 2vh;
  color: #393d50;
  font-size: 2vh;
`;

export const Move2 = styled.div`
  /* border: 3px solid purple; */
  margin: 1vh;
  padding: 0 1.5vh;
  width: 100%;
  font-size: 2.4vh;
  line-height: 3.4vh;
`;

export const Calling = styled.div`
  /* border: 3px solid green; */
  margin: 1vh auto;
  display: flex;
  width: 100%;
  align-items: center;
  height: 5vh;
`;

export const CancelOrConfirm = styled.div`
  /* margin: 5vh 0 1vh 0; */
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  /* justify-content: space-between ; */
  width: 100%;
`;
