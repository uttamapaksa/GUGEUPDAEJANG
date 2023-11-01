import styled from 'styled-components';
import theme from '/src/styles';

export const HospitalItem = styled.div`
  /* border: 3px solid green; */
  margin-top: 1.5vh;
  padding: 1vh;
  box-shadow: 0 0 0.5vh 0.2vh rgba(0, 0, 0, 0.2);
  border-radius: 1vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100%-2vh);
  height: 15vh;
  font-size: 2vh;
`;

export const LeftSection = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 68%;
  height: 100%;
`;

export const RightSection = styled.div`
  // border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: end;
  flex-wrap: wrap;
  width: 30%;
  height: 100%;
`;

export const ItemTitle = styled.div`
  /* border: 3px solid purple; */
  margin-bottom: 1vh;
  padding: 1vh 0;
  display: flex;
  align-items: center;
  height: 2.5vh;
  font-size: 2.5vh;
  font-weight: 700;
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
  padding: 0 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.25vh solid ${theme.color.grayDarkest};
  border-radius: 1.5vh;
  width: auto;
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
  /* border: 3px solid purple;s */
  display: flex;
  justify-content: center;
  align-items: center;
  width:   15%;
  height: 5vh;
`;
