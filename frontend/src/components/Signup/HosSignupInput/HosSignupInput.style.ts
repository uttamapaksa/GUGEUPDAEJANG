import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 3px solid green; */
`;

// atoms
export const Row1 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  /* border: 3px solid skyblue; */
  width: 90%;
  height: 6.2vh;
  margin-bottom: 2.3vh;
`;

export const Row2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 3px solid skyblue; */
  width: 90%;
  height: 3vh;
  margin-bottom: 4vh;
`;

export const LoginToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 3px solid purple; */
  width: 40%;
  height: 100%;
  font-size: 2vh;
  @media (max-width: 500px) {
    font-size: 1.8vh;
    width: 48%;
  }
  `;

export const TxtContent1 = styled.div`
  margin-right: 0.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: '120%';
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  `;

export const TxtContent2 = styled.div`
  margin-left: 0.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: '180%';
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  `;

export const ImgPassword = styled.img`
  position: absolute;
  right: 5%;
  height: 40%;
  cursor: pointer;
`;
