import { useSetRecoilState} from 'recoil';
import * as S from './SearchList.style';
import { centerState, paramedicInfoState, hospitalInfoState } from '/src/recoils/AuthAtoms';
import { SearchItemProps, SearchListProps } from '/src/types/auth';

function SearchList({ searchList, isHosSearch, setIsOpen }: SearchListProps) {
  const setParamedicInfo = useSetRecoilState(paramedicInfoState);
  const setCenter = useSetRecoilState(centerState)
  const setHospitalInfo = useSetRecoilState(hospitalInfoState);

  const selectItem = (searchItem : SearchItemProps) =>{
    setIsOpen(false)
    if (isHosSearch === false){
      setCenter(searchItem.name)
      setParamedicInfo(prev => ({ ...prev, centerId: searchItem.id}));
    }
    else {
      setHospitalInfo({
        hospitalId: searchItem.id,
        email: "",
        password: "",
        name: searchItem.name,
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/pocket-sch.appspot.com/o/hospital_tmp.png?alt=media&token=3361b47c-fb74-4932-aab5-e28bdce64f4d&_gl=1*ijrqc8*_ga*Nzk4NDA1MzUuMTY5ODEyNTQzMw..*_ga_CW55HF8NVT*MTY5ODEyNTQzMy4xLjEuMTY5ODEyNTUxNS42MC4wLjA.",
        role: "HOSPITAL",
        telephone1: searchItem.telephone,
        telephone2: "",
        address: searchItem.address,
        longitude: searchItem.longitude,
        latitude: searchItem.latitude,
      })
    }
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