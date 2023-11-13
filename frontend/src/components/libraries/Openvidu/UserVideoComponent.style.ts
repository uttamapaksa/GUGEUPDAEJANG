import { styled } from "styled-components";

// export const OvVidoDiv = styled.div`
//   background-color: red;
// `;

export const VedioOuterDiv = styled.div`
  position: relative;
  overflow: hidden;
  font-size: 20px;
  aspect-ratio: 3 / 2;
  border-radius: 10px;
  border: 1px solid #333;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: transparent;
    opacity: 0.5;
  }
`;

export const Video = styled.video`
  width: 120%;
  height: 120%;
  position: relative;
`;
