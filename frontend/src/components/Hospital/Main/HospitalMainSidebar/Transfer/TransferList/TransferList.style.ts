import styled from 'styled-components';
import theme from '/src/styles';

export const TransferListContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* background-color: ${theme.color.light}; */
  z-index: 10001;
  margin: 1% 0;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 6px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-clip: padding-box;
    border: 5px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: ${theme.color.grayLight};
  }
`;
