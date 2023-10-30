import styled from 'styled-components';

// templates
export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* border: 3px solid black; */
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* border: 3px solid red; */
  width: 60vh;
  padding-left: 3vh;
  padding-right: 3vh;
  height: 60vh;
  padding-top: 20vh;
  padding-bottom: 20vh;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 3px solid orange; */
  width: 100%;
  height: 100%;
`;

// molecules
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 3px solid green; */
  height: 20%;
`;

export const Blank = styled.div`
  display: flex;
  /* border: 3px solid green; */
  height: 5%;
`;

export const CallWaitToggle = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 3px solid green; */
  height: 45%;
`;

export const GoToHistory = styled.button<{ graylight?: string }>`
  margin: 3vh auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 3px solid green; */
  font-size: 2vh;
  width: 95%;
  height: 10%;
  background-color: ${(props) => props.graylight};
  border: none;
  border-radius: 1.5vh;
  box-shadow: 0 0 0.6vh 0.2vh rgba(0, 0, 0, 0.15);
  &:hover {
    background-color: #b7b7b7
  }
`;
