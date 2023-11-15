import styled from 'styled-components';
import theme from '/src/styles';

export const TransferListItemContainer = styled.div`
  width: 100%;
  height: 30%;
  min-height: 200px;
  background-color: ${theme.color.grayLight};
  z-index: 10001;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TransferListItemContent = styled.div<{$isSelected:boolean}>`
  width: 90%;
  height: 94%;
  margin: 3% 5%;
  position: relative;
  background-color: ${(props) => (props.$isSelected ? theme.color.grayDark : theme.color.white)};
  border-radius: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: baseline;
  padding: 0 2% 40px 2%;
  overflow: hidden;
`;

export const ItemRequestAt = styled.div`
  font-size: ${theme.font.Small3_14};
  color: ${theme.color.fontGrey4};
  padding: 4% 0 0 4%;
`;
export const VideoOn = styled.div`
  font-size: ${theme.font.Small3_14};
  color: ${theme.color.pinkDrak};
  padding: 4% 0 0 4%;
`;
export const ItemParaType = styled.div`
  font-size: ${theme.font.Small3_14};
  color: ${theme.color.black};
  padding: 2% 4%;
`;
export const ItemParaInfo = styled.div`
  width: 90%;
  height: 52px;
  padding: 0 4%;
  font-size: ${theme.font.Small3_14};
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  max-height: 52px;
  overflow: hidden;
`;

export const ItemParaTagGroup = styled.div`
  width: 96%;
  height:  fit-content;
  padding: 4px 2%;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  max-height: 20px;
  overflow: hidden;
`;

