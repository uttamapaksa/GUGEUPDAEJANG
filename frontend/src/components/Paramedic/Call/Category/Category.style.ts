import styled from 'styled-components';
import theme from '/src/styles';

export const Category = styled.div`
  /* border: 3px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

export const Col9 = styled.div`
  /* border: 3px solid skyblue; */
  margin-bottom: 2vh;
  display: flex;
  flex-wrap: wrap;
  width: 95%;
`;

export const BtnEdit = styled.div`
  /* border: 3px solid skyblue; */
  margin-left: auto;
  padding: 1vh;
  font-size: 1.8vh;
  display: flex;
  border-radius: 1vh;
  background-color: ${theme.color.grayMedium};
`;
