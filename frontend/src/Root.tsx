import { useState } from 'react'
import { BrowserRouter as Switch, Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";
import styled from 'styled-components'

//기본 틀 위치 (변경 가능)
const Container = styled.div`
  background-color: #6fff00;
  font-family: 'Pretendard-Regular';  
  display: flex;
  flex-direction: column;
`
const Wrapper = styled.div`
  background-color: #00d5ff;
  display: flex;
  margin-top: 90px;
`
const OutletBox = styled.div`
  background-color: #001eff;
  width: 100%;
  margin-right: 50px;
  margin-left: 250px;
  margin-top: 10px;
`;

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
  )
}

function Root() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}

export default Root;