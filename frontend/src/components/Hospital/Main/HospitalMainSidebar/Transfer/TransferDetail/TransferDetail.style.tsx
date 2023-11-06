import styled from "styled-components";
import theme from "/src/styles";

export const TransferDetailContainer = styled.div`
  position: absolute;
  width: 105%;
  height: 100%;
  background-color: ${theme.color.grayLight};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 10001;
  top: 0%;
  left: 100%;
`;
export const TransferDetailContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 10%;
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

export const DetailItemContainer = styled.div`
  width: 90%;
  height: fit-content;
  min-height: 300px;
  margin: 3% 5% 60px 5%;
  position: relative;
  background-color: ${theme.color.white};
  border-radius: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  padding: 1% 2% 60px 2%;
  overflow: hidden;
`;

export const DetailItemBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemElapseMin = styled.div`
  font-size: ${theme.font.Small4_13};
  color: ${theme.color.fontGrey4};
  padding: 2% 4%;
`;

export const ItemAddr = styled.div`
  width: 92%;
  height: fit-content;
  padding: 0 4%;
  font-size: ${theme.font.Small3_14};
  margin-top: 20px;
`;

export const ItemLeftTime = styled.div`
  font-size: ${theme.font.Small4_13};
  color: ${theme.color.fontPink1};
  padding: 2% 4%;
`;

export const CloseDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 60px;
  top: 50%;
  right: -25px;
  border-radius: 0 5px 5px 0;
  background-color: ${theme.color.grayLight};
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  transform: translate(0, -50%);
  z-index: 10000;
  cursor: pointer;
  `;