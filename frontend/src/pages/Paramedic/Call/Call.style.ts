import styled from 'styled-components';

export const Container = styled.div`
  /* border: 3px solid black; */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentBox = styled.div`
  /* border: 3px solid orange; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  width: 100%;
  overflow-y: scroll;
  margin: 7vh 0 0 0;
`;

export const Blank = styled.div`
  /* border: 3px solid green; */
  width: 100%;
  height: 5vh;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  background-color: gray;
  width: 100%;
  height: 40px;
`

export const Upload = styled.button`
  
`