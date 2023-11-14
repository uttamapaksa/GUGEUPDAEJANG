import styled from 'styled-components';
import theme from '/src/styles';

export const ParamedicHeader = styled.div`
  /* border: 1px solid green; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 9vh;
  z-index: 100;
`;

export const Arrow = styled.div`
  /* border: 3px solid purple; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 80%;
  cursor: pointer;
`;

export const HistoryCategory = styled.div`
  /* border: 1px solid green; */
  padding: 0 3vh;
  display: flex;
  align-items: center;
  width: calc(100% - 6vh);
  height: 7vh;
  z-index: 100;
  box-shadow: 0 0.3vh 0.3vh 0.1vh rgba(0, 0, 0, 0.1);
`;

export const TxtHeaderTitle = styled.div<{ showcenter: number }>`
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5vh;
  font-weight: 400;
  width: 25%;
  height: 100%;
  border-bottom: ${({ showcenter }) => (showcenter ? '0.5vh solid black' : '0.5vh solid transparent')};
`;

export const Wrapper = styled.div`
  border: 1px solid green;
  margin: 2vh 0;
  width: auto;
  height: auto;
  background-color: ${theme.color.grayLight};
`;

export const ContentBox = styled.div`
  border: 1px solid green;
  margin: 0 auto;
  width: 90%;
`;

export const SearchOption = styled.div`
  border: 1px solid red;
  height: 7vh;
`;

export const SearchList = styled.div`
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5% 0;
`;

export const SearchItem = styled.div`
  margin-bottom: 2vh;
  border: 1px solid blue;
  width: 48%;
`;

export const SearchItemRow = styled.div`
  border: 1px solid purple;
  height: 3vh;
`;

