import styled from 'styled-components';
import theme from '/src/styles';

export const ListWrapper = styled.div`
  /* border: 1px solid red; */
  margin-top: 1.5vh;
  width: 100%;
  height: 65%;
  overflow: hidden;
  background-color: #e9e9e9;
`;

export const List = styled.div`
  /* border: 1px solid red; */
  margin: 0 auto;
  width: calc(100% - 3vh);
  height: 100%;
  background-color: white;
  overflow: auto;
<<<<<<< HEAD
  // chrome
=======
    // chrome
>>>>>>> ad5c6c4c9c7b97035b5712cdbc94451000d18961
  &::-webkit-scrollbar {
    width: 0;
  }
  // firefox
  scrollbar-width: none;
`;

export const ListTitle = styled.div`
  /* border: 1px solid red; */
  padding: 0.5vh 0 0.5vh 2vh;
  display: flex;
  align-items: center;
  height: 10%;
  font-weight: 800;
  font-size: 2vh;
  border-bottom: 0.3vh solid #e9e9e9;
`;

export const Listitem = styled.div`
  /* border: 3px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 22%;
  padding: 1.5% 2% 0%;
  border-bottom: 0.3vh solid #e9e9e9;
  &:hover {
    background-color: ${theme.color.grayLight};
  }
`;

export const ListitemRow = styled.div`
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
  height: 28%;
  padding: 0 1%;
`;
export const Listitem1 = styled.div`
  padding-bottom: 1vh;
  color: ${theme.color.fontPink1};
  font-weight: 600;
  font-size: 1.9vh;
`;

export const Listitem2 = styled.div`
  margin-left: 2%;
  font-size: 1.4vh;
`;

export const ListBtnWhite = styled.div`
  border: 0.2vh solid ${theme.color.grayDark};
  border-radius: 0.3vh;
  padding: 0.2% 1%;
  font-size: 1.2vh;
  font-weight: 600;
<<<<<<< HEAD
`;
=======
  `;
>>>>>>> ad5c6c4c9c7b97035b5712cdbc94451000d18961
export const ListBtnBlack = styled.div`
  border: 0.2vh solid black;
  background-color: black;
  border-radius: 0.3vh;
  color: white;
  padding: 0.2% 1%;
  font-size: 1.2vh;
  font-weight: 600;
`;
