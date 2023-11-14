import { styled } from "styled-components";
import theme from "/src/styles";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Session = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
Session;

export const Main = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Sub = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(-50%, -50%);
  height: 20%;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VedioOuterDiv = styled.div`
  position: relative;
  overflow: hidden;
  font-size: 20px;
  /* aspect-ratio: 3 / 2; */
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.grayDark};
  &:hover {
    background-color: transparent;
    opacity: 0.5;
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
`;
