import styled from 'styled-components';
import theme from '/src/styles';

export const HospitalItem = styled.div`
  /* border: 3px solid green; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5vh 0px 1vh 0px;
  padding: 1vh 1vh 1vh 1.5vh;
  box-shadow: 0 0 0.5vh 0.2vh rgba(0, 0, 0, 0.2);
  border-radius: 1vh;
  width: calc(100%-2vh);
  height: 13vh;
  font-size: 2vh;

  @media only screen and (max-width: 600px) {
    width: 88vw;
    height: 9vh;
    font-size: 1.6vh;
  }
`;

export const LeftSection = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  height: 100%;
`;

export const RightSection = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 29%;
  height: 100%;
`;

export const Title = styled.div`
  /* border: 3px solid purple; */
  margin-bottom: 1vh;
  padding: 1vh 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5vh;
  font-size: 2.4vh;
  font-weight: 500;

  @media only screen and (max-width: 600px) {
    font-size: 1.9vh;
    margin-bottom: 0vh;
  }
`;

export const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1vh;
  padding: 0.2vh 2vh;
  width: auto;
  height: 3.5vh;
  box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.07);

  @media only screen and (max-width: 600px) {
    border-radius: 0.6vh;
    padding: 0.3vh 1vh;
    width: auto;
    height: 2.2vh;
    font-size: 1.5vh;
  }
`;

export const Dist = styled.div`
  /* border: 3px solid purple; */
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 5vh;
  color: ${theme.color.pinkLight};

  @media only screen and (max-width: 600px) {
    width: 20%;
  }
`;

export const Time = styled.div`
  /* border: 3px solid purple; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 5vh;
  color: ${theme.color.pinkLight};

  @media only screen and (max-width: 600px) {
    width: 15%;
  }
`;

export const CallTime = styled.div`
  /* border: 3px solid purple; */
  margin: 0 1vh;
  padding: 1vh 0;
  display: flex;
  align-items: center;
  color: #393d50;
  height: 2.5vh;
  font-size: 2vh;
`;

export const CallTimeBig = styled.div`
  /* border: 3px solid purple; */
  margin-left: 1vh;
  padding: 1vh 0;
  display: flex;
  align-items: center;
  height: 5vh;
  color: #393d50;
  font-size: 2vh;
`;


