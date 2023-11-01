import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2.3vh;
  height: 5.5vh;
  margin-bottom: 2.8vh;
  
  cursor: pointer;
`;

export const ToggleBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #E9E9E9;
  border-radius: 2vh;
  width: 90%;
`

export const Btn = styled.button<{ $IsClick: boolean }>`
  position: absolute;
  width: 50%;
  height: 100%;
  font-size: 2.3vh;
  font-weight: 800;
  background-color: white;
  border-radius: 2vh;
  box-shadow: 0px 0px 1vh 0.4vh rgba(0, 0, 0, 0.20);
  border: 0px;

  left: ${props => (props.$IsClick ? "0px" : "50%")};
  transition: left 0.3s ease; 
`
export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #575757;
  height: 100%;
  width: 50%;
`