import styled from 'styled-components';
import theme from '/src/styles';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  /* border: 1px solid red;  */
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 94%;
  height: 5vh;
  padding: 0 3%;
  font-size: 2.5vh;
  font-weight: 600;
  background-color: white;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.10);
`
export const Empty = styled.div`
  width: 1vh;
  height: 2vh;
` 

export const ContentBox = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  bottom: 0px;
  height: 48vh;
  width: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px 30px 0px 0px;
  background-color: white;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);

  overflow-y: scroll;

  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
`
export const ImageBox = styled.div`
  /* border: 1px solid red; */
  background-color: white;
  position: sticky;
  display: flex;
  justify-content: center;
  top: 0px;
  width: 100%;
`

export const StickyBox = styled.div`
  /* border: 1px solid red ; */
  position: fixed;
  width: 17%;
`

export const SearchBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 1vh;
  height: 3vh;
  padding: 1vh 4.5vw;
  font-size: 1.8vh;
  border-radius: 4vh;
  color: ${theme.color.white};
  background-color: ${theme.color.grayDarkest};
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
`
