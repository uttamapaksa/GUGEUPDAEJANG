import * as S from './SearchList.style';

interface SearchListProps {
  results: string[][];
  isHosSearch: boolean;
}

function SearchList({ results, isHosSearch }: SearchListProps) {
  return (
    <S.ListWrapper>
      <S.List>
        <S.ListTitle>{isHosSearch ? '병원' : '안전센터'}(8)</S.ListTitle>
        {results.map((result: any, idx: any) => (
          <S.Listitem key={idx}>
            <S.ListitemRow>
              <S.Listitem1>{result[0]}</S.Listitem1>
            </S.ListitemRow>
            <S.ListitemRow>
              <S.ListBtnWhite>주소</S.ListBtnWhite>
              <S.Listitem2>{result[1]}</S.Listitem2>
            </S.ListitemRow>
            <S.ListitemRow>
              <S.ListBtnBlack>번호</S.ListBtnBlack>
              <S.Listitem2>{result[2]}</S.Listitem2>
            </S.ListitemRow>
          </S.Listitem>
        ))}
      </S.List>
    </S.ListWrapper>
  );
}

export default SearchList;