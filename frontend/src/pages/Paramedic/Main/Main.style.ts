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
  width: 50vh;
  height: 60vh;
  padding: 17vh 3vh 20vh 3vh;
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
  cursor: pointer;
`

export const Blank = styled.div`
  /* border: 3px solid orange; */
  height: 15%;
`;