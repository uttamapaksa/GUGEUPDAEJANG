import styled from 'styled-components';
import theme from '/src/styles';

export const Times = styled.div`
  margin: 0 auto 2vh;
  padding: 1vh 2vh;
  border-top: 0.25vh solid ${theme.color.grayMedium};
  border-bottom: 0.25vh solid ${theme.color.grayMedium};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(95% - 4vh);
  height: 5vh;
`;

export const CallTime = styled.div`
  font-size: 2.2vh;
`

export const CallTimes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 9vh;
  font-size: 2vh;
  color: ${theme.color.white};
  background-color: ${theme.color.fontGrey1};
  border-radius: 1vh;
  box-shadow: 0 0 0.6vh 0.2vh rgba(0, 0, 0, 0.2);
`