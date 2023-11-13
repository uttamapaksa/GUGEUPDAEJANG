import styled from "styled-components";
import theme from "/src/styles";

export const Container = styled.div`
  /* border: 2px solid red; */
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  /* border: 2px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 96.2%;
  height: 92%;
  margin: 2% 0% 0% 2.2%;
`

export const TitleBox = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 5%;
`

export const HospitalName = styled.div`
  /* border: 1px solid green; */
  color: ${theme.color.fontGrey5};
  font-size: 2.7vh;
`

export const Title = styled.div`
  /* border: 1px solid green; */
  font-size: 3.4vh;
  font-weight: 800;
  `

export const ContentBox = styled.div`
  /* border: 3px solid purple; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 93%;
`

export const Content1 = styled.div`
  /* border: 2px solid pink; */
  display: flex;
  justify-content: space-between;
  height: 9.7%;
  width: 100%;
  `
export const Content2 = styled.div`
  /* border: 2px solid pink; */
  display: flex;
  justify-content: space-between;
  height: 41.5%;
  width: 100%;
`
export const Content3 = styled.div`
  /* border: 2px solid pink; */
  display: flex;
  justify-content: space-between;
  height: 41.5%;
  width: 100%;
`