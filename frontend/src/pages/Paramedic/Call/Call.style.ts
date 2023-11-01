import styled from 'styled-components';

export const Container = styled.div`
  /* border: 3px solid black; */
  display: flex;
  justify-content: center;
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

export const Blank = styled.div`
  /* border: 3px solid green; */
  display: flex;
  width: 100%;
  height: 5vh;
`;
