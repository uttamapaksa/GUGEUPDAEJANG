import styled from 'styled-components';
import theme from '/src/styles';

export const Option = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 7vh;
  width: 88%;
`;

export const OptionTitle = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 3.6vh;
  font-size: 2.1vh;
  font-weight: 800;
`;

export const OptionTimeBox = styled.div`
  display: flex;
  align-items: center;
  height: 4vh;
  width: 38%;
  border: 1px solid #B3B3B3;
  border-radius: 5px;
  background-color: ${theme.color.white};
  font-size: 1.5vh;
`;

export const CalenderIcon = styled.div`
  margin: 0 2vh;
  width: 12%;
`;

export const CalenderModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

export const CalenderModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 500;
  transform: translate(-60%, 15%);
`;

export const OptionTimeTilde = styled.div`
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
  font-weight: 600;
`;

export const OptionTimeBtn = styled.button`
  /* border: 1px solid green; */
  border: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4vh;
  width: 12%;
  border-radius: 1vh;
  background-color: ${theme.color.pinkLight};
  color: white;
  font-size: 1.7vh;
`;
