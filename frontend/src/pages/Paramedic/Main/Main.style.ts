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
  height: 65vh;
  padding-top: 15vh;
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

export const Logout = styled.div`
  /* border: 3px solid orange; */
  position: absolute;
  top: 3vh;
  right: 3vh;
  font-size: 2vh;
  font-weight: 700;
  color: #939393;
`

export const Blank = styled.div`
  height: 15%;
`;