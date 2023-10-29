import * as S from './WaitMove.style';

function WaitMove() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ParamedicHeader>
          <S.Arrow />
          <S.TxtHeaderTitle>요청 대기 / 이송 중</S.TxtHeaderTitle>
          <S.Arrow />
        </S.ParamedicHeader>

        <S.Map></S.Map>

        <S.ContentBox>
          <S.OpenCloseToggle>토글</S.OpenCloseToggle>

          <S.Time>요청 시간</S.Time>

          <S.HospitalList>
            <S.ListTitle>보낸 요청</S.ListTitle>

            <S.HospitalItem>
              <S.ItemTitle />
              <S.ItemCallTime />
              <S.ItemNumber />
              <S.ItemDist />
              <S.ItemTime />
              <S.BtnToggle />
            </S.HospitalItem>

            <S.HospitalItem>
              <S.ItemTitle />
              <S.ItemCallTime />
              <S.ItemNumber />
              <S.ItemDist />
              <S.ItemTime />
              <S.BtnToggle />
            </S.HospitalItem>
          </S.HospitalList>

          <S.HospitalList>
            <S.ListTitle>대기 요청</S.ListTitle>
            <S.HospitalItem>
              <S.ItemTitle />
              <S.ItemCallTime />
              <S.ItemNumber />
              <S.ItemDist />
              <S.ItemTime />
              <S.BtnToggle />
            </S.HospitalItem>
          </S.HospitalList>

          <S.TotalInformation>
              <S.ItemTitle />
              <S.ItemCallTime />
              <S.Move1 />
              <S.Move2 />
              <S.Move1 />
              <S.Move2 />
              <S.Move1 />
              <S.Move2 />
          </S.TotalInformation>

          <S.Calling>
            <S.BtnMediaRecord/>
            <S.BtnMediaRecord/>
          </S.Calling>

        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
}

export default WaitMove;
