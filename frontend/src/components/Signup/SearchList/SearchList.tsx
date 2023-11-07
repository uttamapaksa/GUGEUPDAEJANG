import { useSetRecoilState} from 'recoil';
import * as S from './SearchList.style';
import { centerState, paramedicInfoState } from '/src/recoils/AuthAtoms';
import { SearchItemProps, SearchListProps } from '/src/types/auth';

function SearchList({ searchList, isHosSearch, setIsOpen }: SearchListProps) {
  const setParamedicInfo = useSetRecoilState(paramedicInfoState);
  const setCenter = useSetRecoilState(centerState)

  const selectItem = (searchItem : SearchItemProps) =>{
    setIsOpen(false)
    if (isHosSearch === false){
      setCenter(searchItem.name)
      setParamedicInfo(prev => ({ ...prev, centerId: searchItem.id}));
    }
    // else if (isHosSearch === true){}
  }

  return (
    <S.ListWrapper>
      <S.List>
        <S.ListTitle>{isHosSearch ? '병원' : '안전센터'}({searchList.length})</S.ListTitle>
        {searchList.map((searchItem: any, idx: any) => (
          <S.Listitem 
            key={idx}
            onClick={() => selectItem(searchItem)}>
            <S.ListitemRow>
              <S.Listitem1>{searchItem.name}</S.Listitem1>
            </S.ListitemRow>
            <S.ListitemRow>
              <S.ListBtnWhite>주소</S.ListBtnWhite>
              <S.Listitem2>{searchItem.address}</S.Listitem2>
            </S.ListitemRow>
            <S.ListitemRow>
              <S.ListBtnBlack>번호</S.ListBtnBlack>
              <S.Listitem2>{searchItem.telephone}</S.Listitem2>
            </S.ListitemRow>
          </S.Listitem>
        ))}
      </S.List>
    </S.ListWrapper>
  );
}

export default SearchList;