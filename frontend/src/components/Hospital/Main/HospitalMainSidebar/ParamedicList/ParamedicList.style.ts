import styled from 'styled-components';
import theme from '/src/styles';

export const ParamedicListContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${theme.color.light};
  z-index: 10001;
  margin: 1% 0;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 3px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;
