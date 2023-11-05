import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { categoriesState, categoriesSelectedState } from '/src/recoils/ParamedicAtoms';
import * as S from './Category.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';
import PATH from '/src/constants/path';

function Category({ setCallState }: { setCallState: any }) {
  const [options, setOptions] = useRecoilState(categoriesState);
  const [newOption, setNewOption] = useState<string>('');
  const [selected, setSelected] = useRecoilState(categoriesSelectedState);
  const [edit, setEdit] = useState<boolean>(false);
  const optionClick = (option: string) => {
    if (selected.includes(option)) {
      const newArray = selected.filter((i) => i !== option);
      setSelected(newArray);
      setCallState((prev: any) => ({
        ...prev,
        tags: newArray,
      }));
    } else {
      const newArray = [...selected, option];
      setSelected(newArray);
      setCallState((prev: any) => ({
        ...prev,
        tags: newArray,
      }));
    }
  };
  const addOption = () => {
    if (newOption.trim() === '') return;
    if (options.includes(newOption)) return;
    setOptions((prev) => [...prev, newOption]);
    setNewOption('');
  };
  const deleteOption = (option: string) => {
    setOptions(options.filter((i) => i !== option));
    setSelected(selected.filter((i) => i !== option));
  };
  const navigate = useNavigate();
  const goToWaitMove = () => {
    navigate(PATH.ParamedicWaitMove);
  };
  return (
    <S.Category>
      <A.TxtParamedicTitle $justifyContent="space-between">
        주요 분류
        <S.BtnEdit onClick={() => setEdit(!edit)}>{edit ? '삭제완료' : '삭제하기'}</S.BtnEdit>
      </A.TxtParamedicTitle>
      <S.Col9>
        {options.map((option: string) => (
          <A.BtnToggle
            key={option}
            $position="relative"
            $border={`0.3vh solid ${theme.color.grayDarkest}`}
            $borderRadius="1.5vh"
            $margin="0 1vh 1.2vh 0"
            $padding="0 3.8vh"
            $width="auto"
            $height="4.5vh"
            $fontSize="2vh"
            $IsClick={selected.includes(option) ? true : false}
            onClick={() => optionClick(option)}
          >
            {edit && (
              <A.ImgDeleteCategory
                onClick={() => deleteOption(option)}
                $position="absolute"
                $top="-2vh"
                $right="0vh"
                $width="4vh"
              />
            )}
            {option}
          </A.BtnToggle>
        ))}
      </S.Col9>
      <S.Col9>
        <A.IptUserInfo
          $boxShadow="0"
          $border={`0.25vh solid ${theme.color.grayDark}`}
          $borderRadius="1.5vh"
          $width="70%"
          $height="4.5vh"
          $color={theme.color.grayDark}
          $fontSize="1.6vh"
          onChange={(e) => setNewOption(e.target.value)}
          placeholder="태그를 추가해주세요"
          value={newOption}
        ></A.IptUserInfo>
        <A.BtnSubmit
          onClick={addOption}
          $borderRadius="1.5vh"
          $margin="0 auto"
          $width="20%"
          $height="4.5vh"
          $fontSize="2vh"
          $backgroundColor={theme.color.grayDark}
        >
          추가
        </A.BtnSubmit>
        <A.BtnSubmit
          onClick={goToWaitMove}
          $margin="10vh 0 0 0 "
          $borderRadius="1vh"
          $width="100%"
          $height="6vh"
          $backgroundColor={theme.color.fontPink1}
          $fontSize="2.5vh"
        >
          이송 요청
        </A.BtnSubmit>
      </S.Col9>
    </S.Category>
  );
}

export default Category;
