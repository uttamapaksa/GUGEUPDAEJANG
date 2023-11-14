import styled from 'styled-components';
import theme from '/src/styles';

export const SearchList = styled.div`
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5% 0;
`;

export const Item = styled.div`
  position: relative;
  margin-bottom: 2vh;
  padding: 1.5%;
  border: 1px solid blue;
  width: 46%;
`;

export const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid purple;
`;

export const ItemCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border: 1px solid blue;
  width: 25%;
  color: ${theme.color.grayDarkest};
`;
export const ItemContent = styled.div`
  border: 1px solid blue;
  width: 70%;
  min-height: 4vh;
  overflow-wrap: break-word;
`;

export const Status = styled.div`
  position: absolute;
  top: 1vh;
  right: 1vh;
  padding: 0.5vh 1vh;
  border: 0.2vh solid red;
  border-radius: 1vh;
  color: red;
`;
