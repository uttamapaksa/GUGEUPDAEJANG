import styled from "styled-components";
import theme from "/src/styles";

export const Container = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F5F5F5;
`

export const MainTItle = styled.div`
  /* border: 2px solid red; */
  width: 54vh;
  height: 9vh;
  font-size: 2.5vh;
  font-weight: 800;
  line-height: 9vh;
`

export const Wrapper = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: ${theme.color.white};
  border-radius: 1.2vh;
  width: 46vh;
  height: 78vh;
  padding: 2vh 4vh;
  overflow-y: scroll;
`

export const Title = styled.div`
  /* border: 1px solid blue; */
  font-size: 2.3vh;
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
  height: 24vh;
  margin: 2% 0.5% 1% 0.5%;
`

export const Image = styled.img`
  border: 1px solid ${theme.color.fontGrey5};
  width: 47%;
  height: 24vh;
  margin: 2% 0.5% 1% 0.5%;
`

export const Audio = styled.audio`
  width: 96%;
  height: 3.6vh;
  margin: 3% auto 2% auto;
  border-radius: 6px;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.10);

  &::-webkit-media-controls {
    background-color: white;
    border-radius: 6px;
  };

  &::-webkit-media-controls-panel {
    background-color: white; 
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