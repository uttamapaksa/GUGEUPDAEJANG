import * as S from './HospitalReport.style'
import A from '/src/components/Commons/Atoms/index'

function HospitalReport () {
  return (
    <S.Container>
      <S.Wrapper>
        <S.TitleBox>
          <S.HospitalName>세브란스 병원</S.HospitalName>
          <S.Title>요청/이송 REPORT</S.Title>
        </S.TitleBox>

        <S.ContentBox>
          <S.Content1>
            <A.DivReport
              $width='15.3%'></A.DivReport>
            <A.DivReport
              $width='15.3%'></A.DivReport>
            <A.DivReport
              $width='15.3%'></A.DivReport>
            <A.DivReport
              $width='23.8%'></A.DivReport>
            <A.DivReport
              $width='23.8%'></A.DivReport>

          </S.Content1>
          <S.Content2>
            <A.DivReport
              $width='49.2%'></A.DivReport>
            <A.DivReport
              $width='49.2%'></A.DivReport>
          </S.Content2>
          
          <S.Content3>
            <A.DivReport
              $width='49.2%'></A.DivReport>
            <A.DivReport
              $width='23.8%'></A.DivReport>
            <A.DivReport
              $width='23.8%'></A.DivReport>
          </S.Content3>
        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  )
}

export default HospitalReport