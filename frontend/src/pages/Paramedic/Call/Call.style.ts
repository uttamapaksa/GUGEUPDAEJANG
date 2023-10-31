import styled from 'styled-components';

// templates
export const Container = styled.div`
  /* border: 3px solid black; */
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  /* border: 3px solid red; */
  display: flex;
`;

export const ContentBox = styled.div`
  /* border: 3px solid orange; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

// molecules

export const Blank = styled.div`
  display: flex;
  /* border: 3px solid green; */
  width: 100%;
  height: 5vh;
`;

export const Information = styled.div`
  /* border: 3px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* border: 3px solid green; */
  width: 90%;
  /* min-height: 40vh; */
  /* height: 40vh; */
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

// export const TxtParamedicTitle = styled.div`
//   border: 3px solid purple;
//   width: 100%;
//   height: 5vh;
// `;

export const Col9 = styled.div`
  /* border: 3px solid skyblue; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 95%;
  height: 100%;
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
  border: 3px solid #DCDCE0;
  margin-top: 4vh;
  padding: 2vh;
  width: 100%;
  min-height: 20vh;
  font-size: 2.1vh;
  line-height: 3vh;
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
