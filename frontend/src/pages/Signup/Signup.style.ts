import styled from 'styled-components';

// templates
export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* border: 3px solid black; */
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* border: 3px solid red;   */
  width: 60vh;  
  padding-left: 1vh;
  padding-right: 1vh;
  height: 60vh;
  padding-top: 20vh;
  padding-bottom: 20vh;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 3px solid orange; */
  width: 100%;
  height: 100%;
`;