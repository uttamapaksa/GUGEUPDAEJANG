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
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  background-color: ${theme.color.white};
  border-radius: 1vh;
  width: 23vh;
  height: 12vh;
  padding: 3vh 4vh;
`

export const Title = styled.p`
  font-size: 2.5vh;
  font-weight: 800;
`
export const Ipt = styled.input`
  display: none;
`
export const IptCamera = styled(Ipt)``
export const IptVideo = styled(Ipt)``

export const Btn = styled.button`
  background-color: transparent;
  border: 0px;
  font-size: 1.8vh;
`
export const BtnCamera = styled(Btn)``
export const BtnVideo = styled(Btn)``
