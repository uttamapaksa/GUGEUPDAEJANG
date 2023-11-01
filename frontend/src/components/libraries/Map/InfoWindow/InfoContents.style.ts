import styled from 'styled-components';
import theme from '/src/styles';

export const InfoWindowContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  background-color: #ffffffea;
  box-shadow: 1px 5px 5px 5px #3b3b3b40;
  font-size: 12px;
  border-radius: 5px;
  flex-direction: column;
  width: 220px;
  height: fit-content;
  overflow: hidden;
  padding: 8px;
`;

export const InfoWindowArrow = styled.div`
  position: absolute;
  bottom: -33px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 0;
  height: 0;
  border-bottom: 20px solid transparent;
  border-top: 20px solid #ffffffea;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  pointer-events: none;
`;

export const InfoBox = styled.div`
  width: 100%;
`;

export const AddrP = styled.p`
  display: flex;
  flex-direction: column;
  margin-bottom: 3px;
  overflow: hidden;
`;

export const AddrTitle = styled.span`
  width: 180px;
  font-size: 13px;
  font-weight: bold;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  max-height: 15px;
  overflow: hidden;
`;

export const ContentsP = styled.p`
  display: flex;
  flex-direction: row;
  padding: 2px 0px;
  width: 100%;
`;

export const StartTimeSpan = styled.span`
  color: #707070;
  text-align: left;
  width: 50%;
`;

export const BottomHr = styled.hr`
  position: relative;
  border-width: 0;
  height: 0.5px;
  left: -10%;
  width: 120%;
  background-color: ${theme.color.grayDark};
`;
export const ElapseTimeSpan = styled.span`
  color: #707070;
  text-align: right;
  width: 50%;
  /* padding-right: 10px; */
`;
export const LeftTimeSpan = styled.span`
  display: flex;
  color: ${theme.color.pinkDrak};
  justify-content: end;
  align-items: end;
  padding-top: 5px;
  width: 100%;
`;
