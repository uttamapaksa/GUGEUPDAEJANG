import { useState,ChangeEvent } from 'react';
import * as S from './SearchModal.style';
import A from '../../Commons/Atoms';
import SearchList from '../SearchList/SearchList';
import { SearchModalProps } from '/src/types/auth';
import { getParaCenterList } from '/src/apis/auth';

function SearchModal({ isHosSearch, setIsOpen }: SearchModalProps) {
  const [searchWord, setSearchWord] = useState<string>("")
  const [searchList, setSearchList] = useState<[]>([])

  // 검색창 키워드
  const handleSearchWord = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 10) {
      e.target.value = e.target.value.slice(0, 10);
    }
    setSearchWord(e.target.value.split(" ").join(""));("")
  }

  // 검색창 초기화
  const deleteSearchWord = () => {
    setSearchWord("")
  }

  // 검색 리스트
  const SearchCenterORHospital = () => {
    if (isHosSearch === false && searchWord) {axiosParaCenterList()}
    else if (isHosSearch === true && searchWord) {console.log("병원검색")}
  }

  // 센터 목록 조회
  const axiosParaCenterList = async ():Promise<void> => {
    try {
      const response = await getParaCenterList(searchWord)
      setSearchList(response)
    }
    catch(error) {
      console.log(error)
    }
  }

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
              <S.IptTitle
                type='text'
                value={searchWord}
                onChange={handleSearchWord}
                placeholder="예) 유성구" />
              <A.ImgExitGray 
                $cursor="pointer" 
                $margin="0 1vh" 
                $width="2vh" 
                onClick={deleteSearchWord}/>
              <A.ImgSearchGray 
                $cursor="pointer" 
                $margin="0 1vh" 
                $width="2.8vh"
                onClick={SearchCenterORHospital}/>
            </S.Title1>
          </S.Title>
        </S.ShadowTopDiv>
        <SearchList 
          searchList={searchList} 
          isHosSearch={isHosSearch}
          setIsOpen={setIsOpen} />
        <S.ShadowBottomDiv />
      </S.Content>
    </S.Overlay>
  );
}

export default SearchModal;
