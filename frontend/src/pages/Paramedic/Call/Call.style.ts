import styled from 'styled-components';

// templates
export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* border: 3px solid black; */
`;

export const Wrapper = styled.div`
  display: flex;
  /* border: 3px solid red; */
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* border: 3px solid orange; */
  width: 100%;
  height: 100%;
`;

// molecules
export const ParamedicHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 3px solid green; */
  width: 100%;
  height: 7vh;
`;

export const Blank = styled.div`
  display: flex;
  /* border: 3px solid green; */
  width: 100%;
  height: 5vh;
`;

export const Ktas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* border: 3px solid green; */
  width: 90%;
  height: 20vh;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* border: 3px solid green; */
  width: 90%;
  height: 40vh;
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* border: 3px solid green; */
  width: 90%;
  height: 40vh;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* border: 3px solid green; */
  width: 90%;
  /* height: 40vh; */
`;

// atoms
// export const TxtHeaderTitle = styled.div`
//   border: 3px solid purple;
//   width: 50%;
//   height: 80%;
// `;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  /* border: 3px solid purple; */
  width: 10%;
  height: 80%;
`;

// export const TxtParamedicTitle = styled.div`
//   border: 3px solid purple;
//   width: 100%;
//   height: 5vh;
// `;

export const Col9 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /* border: 3px solid skyblue; */
  width: 90%;
  height: calc(100% - 5vh);
`;

export const BtnKtas = styled.div`
  display: flex;
  /* border: 3px solid purple; */
  width: 100%;
  height: 50%;
  border-radius: 1vh;
  box-shadow: 0 0 1vh 0.4vh rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

export const TxtKtas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5vh 1vh;
  /* border: 3px solid purple; */
  width: 100%;
  height: 20%;
`;

export const BtnToggle = styled.div`
  /* border: 3px solid purple; */
  width: 23%;
  height: 30%;
`;
// export const BtnMediaRecord = styled.div`
//   border: 3px solid purple;
//   width: 45%;
//   height: 20%;
// `;

export const TxtStatus = styled.div`
  padding: 1.5vh 2vh;
  border: 3px solid #DCDCE0;
  width: 100%;
  height: 60%;
  font-size: 2.2vh;
  line-height: 3.3vh;
`;

export const IptTmp = styled.div`
  /* border: 3px solid purple; */
  width: 75%;
  height: 10%;
`;
export const BtnTmp = styled.div`
  /* border: 3px solid purple; */
  width: 20%;
  height: 10%;
`;

export const BtnSubmit = styled.div`
  /* border: 3px solid purple; */
  width: 100%;
  height: 15%;
`;
