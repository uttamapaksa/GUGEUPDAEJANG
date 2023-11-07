import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './ParamedicHeader.style';
import A from '/src/components/Commons/Atoms';
import PATH from '/src/constants/path';

function ParamedicHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentUrl = location.pathname;
  const goToPrev = () => {
    switch (currentUrl) {
      case PATH.ParamedicCall:
        navigate(PATH.Paramedic);
        break;
      case PATH.ParamedicWaitMove:
        navigate(PATH.ParamedicCall);
        break;
    }
  };
  const goToPost = () => {
    switch (currentUrl) {
      case PATH.Paramedic:
        navigate(PATH.ParamedicCall);
        break;
      case PATH.ParamedicCall:
        navigate(PATH.ParamedicWaitMove);
        break;
    }
  };

  return (
    <S.ParamedicHeader>
      <S.Arrow>
        <A.ImgArrowLeft $width="2vh" onClick={goToPrev} />
      </S.Arrow>
      <A.TxtHeaderTitle>환자 등록</A.TxtHeaderTitle>
      <S.Arrow>
        <A.ImgArrowRight $width="2vh" onClick={goToPost} />
      </S.Arrow>
    </S.ParamedicHeader>
  );
}

export default ParamedicHeader;
