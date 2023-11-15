import styled from "styled-components";
import theme from "/src/styles";

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

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: ${theme.color.white};
  border-radius: 1.2vh;
  width: 43vh;
  height: 83vh;
  padding: 2vh 4vh;
  margin: 6vh 0 0 0;
`

export const Close = styled.div`
  position: absolute;
  top: 2vh;
  right: 2vh;
`

export const Title = styled.div`
  /* border: 1px solid blue; */
  font-size: 2.5vh;
  font-weight: 800;
  margin: 2vh 0;
`

export const ContentBox = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
`

export const Row = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: space-between;
  padding: 0 0.6vh 0.6vh 0.6vh;
`

export const Category = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 18%;
  color: ${theme.color.fontGrey1};
  font-size: 1.9vh;
`

export const Content = styled.div`
  /* border: 1px solid green; */
  display: flex;
  color: ${theme.color.black};
  font-size: 1.9vh;
  font-weight: 500;
  padding: 0 0 0 0.4vh;
`

export const FilesSection = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  flex-wrap : wrap;
  width: 100%;
  height: 30vh;
  margin: 1vh auto;
`

export const Video = styled.video`
  border: 1px solid ${theme.color.fontGrey5};
  width: 47%;
  height: 80%;
  margin: 2% 0.5% 1% 0.5%;
`

export const Image = styled.img`
  border: 1px solid ${theme.color.fontGrey5};
  width: 47%;
  height: 80%;
  margin: 2% 0.5% 1% 0.5%;
`

export const Audio = styled.audio`
  width: 96%;
  height: 10%;
  margin: 0 auto;

  &::-webkit-media-controls-panel {
    color: black;
}
`

export const NoFile = styled.div`
  width: 47%;
  height: 80%;
  margin: 2% 0.5% 1% 0.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${theme.color.grayDarkest};
  font-size: 2.5vh;
  font-weight: 700;
  background-color: ${theme.color.grayMedium};
  border: 1px solid ${theme.color.fontGrey5};
`