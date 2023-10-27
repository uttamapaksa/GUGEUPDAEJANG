import styled from 'styled-components';

export const InfoWindowContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  background-color: #ffffffea;
  box-shadow: 1px 5px 5px 5px #3b3b3b40;
  font-size: 12px;
  border-radius: 10px;
  flex-direction: column;
  width: 250px;
`;

export const KtasDiv = styled.div<{ $num: String }>`
  
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  width: 60px;
  height: 30px;
  background-color: red;
  //background-color: ${(props) => props.$num}; 
  border-radius: 0 10px 0 5px;
  color: #ffffff;
  align-items: center;
  justify-content: center;
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
`;

export const InfoBox = styled.div`
  width: 100%;
`;

export const AddrP = styled.p`
  display: flex;
  flex-direction: column;
  margin-bottom: 3px;
  padding: 0 10px;
  overflow: hidden;
`;

export const AddrTitle = styled.span`
  font-size: 13px;
  font-weight: bold;
`;

export const ContentsP = styled.p`
  display: flex;
  flex-direction: row;
  padding: 0 10px;
`;

export const StartTimeSpan = styled.span`
  color: #707070;
  text-align: left;
  width: 50%;
`;
export const ElapseTimeSpan = styled.span`
  color: #707070;
  text-align: left;
  width: 50%;
`;
export const LeftTimeSpan = styled.span`
  color: #707070;
  text-align: left;
  width: 50%;
`;
