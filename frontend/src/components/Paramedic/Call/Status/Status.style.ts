import styled from 'styled-components';

export const Status = styled.div`
  /* border: 3px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

export const Col9 = styled.div`
  /* border: 3px solid skyblue; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 95%;
`;

export const TxtStatus = styled.textarea`
  /* border: 3px solid skyblue; */
  overflow-wrap: break-word;
  border: 0.3vh solid #dcdce0;
  border-radius: 1vh;
  margin-top: 5vh;
  padding: 2vh;
  width: 100%;
  min-height: 22vh;
  font-size: 2.3vh;
  line-height: 4vh;
`;

export const FileBox = styled.div`
  /* border: 3px solid skyblue; */
  display: flex;
  width: 102%;
`
