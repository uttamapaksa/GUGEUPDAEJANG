import * as S from './SearchModal.style';
import A from '../../Commons/Atoms';
import SearchList from '../SearchList/SearchList';

const dummy_results = [
  ['대전 병원', '대전 대덕구 대전로 1215 대전병원', '042-625-0700'],
  ['대전 병원', '대전 대덕구 대전로 1215 대전병원', '042-625-0700'],
  ['대전 병원', '대전 대덕구 대전로 1215 대전병원', '042-625-0700'],
  ['대전 병원', '대전 대덕구 대전로 1215 대전병원', '042-625-0700'],
  ['대전 병원', '대전 대덕구 대전로 1215 대전병원', '042-625-0700'],
  ['대전 병원', '대전 대덕구 대전로 1215 대전병원', '042-625-0700'],
  ['대전 병원', '대전 대덕구 대전로 1215 대전병원', '042-625-0700'],
  ['대전 병원', '대전 대덕구 대전로 1215 대전병원', '042-625-0700'],
  ['대전 병원', '대전 대덕구 대전로 1215 대전병원', '042-625-0700'],
];

interface SearchModalProps {
  isHosSearch: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchModal({ isHosSearch, setIsOpen }: SearchModalProps) {
  return (
    <S.Overlay>
      <S.Content>
        <S.ShadowTopDiv>
          <S.Title>
            <A.ImgExitBlack
              onClick={() => setIsOpen(false)}
              $position="absolute"
              $zIndex="20"
              $top="3vh"
              $right="3vh"
              $width="2.5vh"
              $cursor="pointer"
            />
            <S.Title1>{isHosSearch ? '병원 검색' : '안전센터 검색'} </S.Title1>
            <S.Title1>
              <S.IptTitle placeholder="예) 유성구" />
              <A.ImgExitGray $cursor="pointer" $margin="0 1vh" $width="2vh" />
              <A.ImgSearchGray $cursor="pointer" $margin="0 1vh" $width="2.8vh" />
            </S.Title1>
          </S.Title>
        </S.ShadowTopDiv>
        <SearchList results={dummy_results} isHosSearch={isHosSearch} />
        <S.ShadowBottomDiv />
      </S.Content>
    </S.Overlay>
  );
}

export default SearchModal;
