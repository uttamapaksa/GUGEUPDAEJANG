import styled from 'styled-components';
import theme from '/src/styles';

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: start; */
  align-items: center;
  width: 50vh;
  height: 70vh;
  border-radius: 2vh;
  z-index: 10;
  /* background-color: white; */
  background-color: #e9e9e9;
  overflow: hidden;
`;

export const ShadowTopDiv = styled.div`
  /* border: 3px solid pink; */
  display: flex;
  align-items: end;
  height: 22%;
  width: 100%;
  background-color: white;
  box-shadow: 0 0 0.5vh 0.2vh rgba(0, 0, 0, 0.1);
  padding-bottom: 2vh;
`;

export const Title = styled.div`
  /* border: 3px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 70%;
  padding-bottom: 1.1vh;
  border-bottom: 0.3vh solid ${theme.color.grayDarkest};
`;

export const Title1 = styled.div`
  /* border: 3px solid red; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 3%;
  padding-right: 3%;
  height: 30%;
  font-size: 2.2vh;
  font-weight: 800;
  `;

export const IptTitle = styled.input`
  width: 100%;
  padding-left: 1vh;
  height: 100%;
  font-size: 2vh;
  border: none;
  outline: none;
  &::placeholder {
    color: ${theme.color.grayDark};
  }
`;

export const ShadowBottomDiv = styled.div`
  /* border: 3px solid pink; */
  display: flex;
  height: 5%;
  width: 100%;
  background-color: white;
  box-shadow: 0 0 0.5vh 0.2vh rgba(0, 0, 0, 0.1);
  padding-bottom: 2vh;
`;
