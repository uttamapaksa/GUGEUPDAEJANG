import styled from 'styled-components';

export const Container = styled.div`
  /* border: 3px solid black; */
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const Wrapper = styled.div`
  /* border: 3px solid red; */
  display: flex;
  align-items: center;
  width: 60vh;
  padding-left: 3vh;
  padding-right: 3vh;
  height: 60vh;
  padding-top: 20vh;
  padding-bottom: 20vh;
`;

export const ContentBox = styled.div`
  /* border: 3px solid orange; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const Blank = styled.div`
  height: 15%;
`;