import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';

//기본 틀 위치 (변경 가능)
const Container = styled.div``;
const Wrapper = styled.div``;
const OutletBox = styled.div``;

function App() {
  // const isLogIn = useRecoilValue(LoginState);
  // console.log('로그인 여부=', isLogIn)

  return (
    <Container>
      <Wrapper>
        <OutletBox>
          {/* 여기에서 페이지 끼워짐 */}
          <Outlet />
        </OutletBox>
      </Wrapper>
    </Container>
  );
}

function Root() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}

export default Root;
