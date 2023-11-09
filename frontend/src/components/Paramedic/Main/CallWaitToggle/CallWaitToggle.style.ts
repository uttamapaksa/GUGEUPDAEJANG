import styled, { css } from 'styled-components';
import theme from '/src/styles';

export const Container = styled.div`
  /* border: 3px solid green; */
  display: flex;
  justify-content: space-between;
  height: 45%;
`;

export const TxtParaState1 = styled.div<{ istransferring: number; selected: number }>`
  padding: 0.2vh 0;
  font-size: 3.2vh;
  font-weight: 800;
  ${({ istransferring, selected }) =>
    istransferring
      ? css`
          color: ${theme.color.grayMedium};
        `
      : selected === 0
      ? css`
          color: ${theme.color.grayDarkest};
        `
      : css`
          color: ${theme.color.white};
        `}
`;

export const TxtParaState5 = styled.div<{ istransferring: number }>`
  padding: 0.2vh 0;
  font-size: 3.2vh;
  font-weight: 800;
  ${({ istransferring }) =>
    istransferring
      ? css`
          color: ${theme.color.white};
        `
      : css`
          color: ${theme.color.grayMedium};
        `}
`;

export const TxtParaState2 = styled.div`
  padding: 0.2vh 0;
  font-size: 2vh;
  color: ${theme.color.grayDark};
`;

export const Blank = styled.div`
  height: 2vh;
`;

export const Row1 = styled.div`
  display: flex;
`;

export const TxtParaState3 = styled.div`
  padding: 0.2vh 0;
  font-size: 2vh;
  font-weight: 600;
  color: ${theme.color.white};
`;

export const TxtParaState4 = styled.div`
  padding: 0.2vh 0;
  margin: auto 0 0 1vh;
  font-size: 1.5vh;
  color: ${theme.color.grayDark};
`;

export const ImgDiv = styled.div`
  /* border: solid 1px red; */
  position: absolute;
  display: flex;
  justify-content: end;
  bottom: 3vh;
  right: 3vh;
`;
