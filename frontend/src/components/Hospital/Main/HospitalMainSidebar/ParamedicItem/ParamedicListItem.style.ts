import styled from 'styled-components';
import theme from '/src/styles';

export const ParamedicItemContainer = styled.div`
  width: 100%;
  height: 30%;
  min-height: 180px;
  background-color: ${theme.color.grayLight};
  z-index: 10001;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ParamedicItemContent = styled.div`
  width: 90%;
  height: 94%;
  margin: 3% 5%;
  position: relative;
  background-color: ${theme.color.white};
  border-radius: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
  overflow: hidden;
`;

export const ItemRequestAt = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  font-size: ${theme.font.Small3_14};
  color: ${theme.color.fontGrey4};
  padding: 8px;
`;
export const ItemParaType = styled.div`
  position: absolute;
  left: 0%;
  top: 20px;
  font-size: ${theme.font.Small3_14};
  color: ${theme.color.black};
  padding: 10px;
`;
export const ItemParaInfo = styled.div`
  position: absolute;
  left: 0%;
  top: 45px;
  width: 90%;
  height: 30%;
  padding: 5px 10px;
  font-size: ${theme.font.Small3_14};
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  max-height: 50px;
  overflow: hidden;
`;

// export const ItemParaInfoText = styled.p`
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
// `;

export const ItemParaTagGroup = styled.div`
  position: absolute;
  left: 0%;
  bottom: 32px;
  width: 96%;
  height: 12%;
  padding: 10px 2%;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* background-color: ${theme.color.blue}; */
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  max-height: 20px;
  overflow: hidden;
`;

