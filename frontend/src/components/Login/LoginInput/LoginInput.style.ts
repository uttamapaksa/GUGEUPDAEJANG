import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 3px solid green; */
`;

export const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 3px solid skyblue; */
  width: 90%;
  height: 6.2vh;
  margin-bottom: 2.3vh;
`;

export const Row2 = styled.div`
  /* border: 3px solid skyblue; */
  display: flex;
  justify-content: center;
  width: 90%;
  height: 3vh;
  font-size: 2vh;
`;

export const TxtLoginToggle = styled.div`
  /* border: 3px solid purple; */
  margin: 0 0.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vh;
  cursor: pointer;
  &:hover {
    text-decoration: underline
  }
`;

TxtLoginToggle;
