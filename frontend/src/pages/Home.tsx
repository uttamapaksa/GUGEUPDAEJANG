import { styled } from "styled-components";

const Container = styled.div`
background-color: red;
  align-items: center;
  margin-left: 10px;
`;
const MainWrapper = styled.div`
background-color: #ffae00;
  display: flex;
  align-items: center;
  margin-top: 35px;
`

function Home() {
  return (
    <Container>
      <MainWrapper>
        main page
      </MainWrapper>
    </Container>
  );
}

export default Home;