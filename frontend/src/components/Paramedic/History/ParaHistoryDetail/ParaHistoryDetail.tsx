import { useEffect, useState } from 'react';
import * as S from './ParaHistoryDetail.style'
import { FileTypes } from '/src/components/Hospital/Main/HospitalMainSidebar/Request/ParamedicDetail/ParamedicDetail';
import { useRecoilValue } from 'recoil';
import { historyDetailState } from '/src/recoils/ParamedicAtoms';
import A from '/src/components/Commons/Atoms';

interface ParaHistoryCardProps {
  DetailClose?: () => void
}

interface GroupMapping {
  [key: string]: string;
}

const ageGroupMapping: GroupMapping = {
  INFANT: '영유아',
  CHILD: '아동',
  ADOLESCENT: '청소년',
  YOUTH: '청년',
  MIDDLE: '중장년',
  SENIOR: '노인',
};
const genderMapping: GroupMapping = {
  MALE: '남',
  FEMALE: '여',
};

function ParaHistoryDetail ({DetailClose} : ParaHistoryCardProps) {
  const [objFiles, setObjFiles] = useState<FileTypes>({ video: null, image: null, voice: null });
  const historyDetail = useRecoilValue(historyDetailState)

  const checkFiles = (fileList: string[]) => {
    const filesObject: FileTypes = { video: null, image: null, voice: null };

    fileList.map((file) => {
      if (!file) return;
      const parts = file.split('.');
      const extension = parts.length > 1 ? parts.pop()?.toLowerCase() : '';
      if (!extension) return;
      if (extension === 'mp4') {
        filesObject.video = file as string | null;
      } else if (extension === 'jpg' || extension === 'png') {
        filesObject.image = file as string | null;
      } else if (extension === 'webm') {
        filesObject.voice = file as string | null;
      }
    });
    setObjFiles(filesObject)
  };
  
  useEffect(() => {
    if (historyDetail?.files) { checkFiles(historyDetail.files) }
  }, [historyDetail]);

  const DetailCloseProtect = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // 이 부분이 중요합니다.
  };

  return (
    <S.Overlay onClick={DetailClose}>
      <S.Container onClick={DetailCloseProtect}>
        <S.Close onClick={DetailClose}> <A.ImgExitBlack $width='2.8vh'/> </S.Close>
        <S.Title>이송 정보</S.Title>
        <S.ContentBox>
          <S.Row>
            <S.Category>
              <span>이</span>
              <span>송</span>
              <span>날</span>
              <span>짜</span>
            </S.Category>
            <S.Content>
              {historyDetail?.date}
            </S.Content>
          </S.Row>
          <S.Row>
            <S.Category>
              <span>이</span>
              <span>송</span>
              <span>시</span>
              <span>간</span>
            </S.Category>
            <S.Content>
              {historyDetail?.transferStartTime} - {historyDetail?.transferEndTime}
            </S.Content>
          </S.Row>
          <S.Row>
            <S.Category>
              <span>사</span>
              <span>고</span>
              <span>주</span>
              <span>소</span>
            </S.Category>
            <S.Content>
              {historyDetail?.accidentAddress}
            </S.Content>
          </S.Row>
          <S.Row>
            <S.Category>
              <span>이</span>
              <span>송</span>
              <span>병</span>
              <span>원</span>
            </S.Category>
            <S.Content>
              {historyDetail?.hospitalName}
            </S.Content>
          </S.Row>
          <S.Row>
            <S.Category>
              <span>담</span>
              <span>당</span>
              <span>자</span>
              <span>명</span>
            </S.Category>
            <S.Content>
              {historyDetail?.paramedicName}
            </S.Content>
          </S.Row>
        </S.ContentBox>

        <S.Title>환자 정보</S.Title>
        <S.ContentBox>
          <S.Row>
            <S.Category>
              <span>인</span>
              <span>적</span>
              <span>사</span>
              <span>항</span>
            </S.Category>
            <S.Content>
            {ageGroupMapping[historyDetail!.ageGroup]} ({genderMapping[historyDetail!.gender]})
            </S.Content>
          </S.Row>
          <S.Row>
            <S.Category>
              <span>응</span>
              <span>급</span>
              <span>분</span>
              <span>류</span>
            </S.Category>
            <S.Content>
              {historyDetail?.ktas}
            </S.Content>
          </S.Row>
          <S.Row>
            <S.Category>
              <span>주</span>
              <span>요</span>
              <span>분</span>
              <span>류</span>
            </S.Category>
              {historyDetail?.tags.map((item: string, index: number) => (
              <A.DivTag
                key={index}
                $width="fix-content"
                $height="4vh"
                $borderRadius="1.2vh"
                $textAlign="center"
                $padding="0 1.2vh"
                $fontSize="1.9vh"
              >
                {item}
              </A.DivTag>
              ))}
          </S.Row>
          
          <S.Row>
            <S.Category>
              <span>상</span>
              <span>세</span>
              <span>설</span>
              <span>명</span>
            </S.Category>
          </S.Row>
            <S.Content>
              {historyDetail?.description}
            </S.Content>
            
          <S.FilesSection>
            {objFiles.video ? (
              <S.Video controls>
                <source src={objFiles.video} type="video/mp4" /></S.Video>
            ) : (<S.NoFile>영상이<br></br>없습니다.</S.NoFile>)}

            {objFiles.image ? (
              <S.Image src={objFiles.image}></S.Image>
            ) : (<S.NoFile>사진이<br></br>없습니다.</S.NoFile>)}

            {objFiles.voice ? (
              <S.Audio src={objFiles.voice} controls></S.Audio>
            ) : (<S.Audio controls></S.Audio>)}
          </S.FilesSection>

        </S.ContentBox>
      </S.Container>
    </S.Overlay>
  )
}

export default ParaHistoryDetail