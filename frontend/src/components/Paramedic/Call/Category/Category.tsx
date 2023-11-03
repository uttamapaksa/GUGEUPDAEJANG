import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Category.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';
import PATH from '/src/constants/path';

function Category() {
  const [options, setOptions] = useState<string[]>(['의식 없음', '추락', '과다출혈', '심정지 이력', '정신 질환 이력']);
  const [newOption, setNewOption] = useState<string>('');
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [edit, setEdit] = useState<boolean>(false);
  const optionClick = (index: number) => {
    if (selectedIndices.includes(index)) {
      setSelectedIndices(selectedIndices.filter((i) => i !== index));
    } else {
      setSelectedIndices([...selectedIndices, index]);
    }
  };
  const addOption = () => {
    if (newOption.trim() === '') return;
    setOptions((prev) => [...prev, newOption]);
    setNewOption('');
  };
  const deleteOption = (index: number) => {
    setOptions((curr) => curr.filter((_, i) => i !== index));
  };
  const navigate = useNavigate();
  const goToWaitMove = () => {
    navigate(PATH.ParamedicWaitMove);
  };
  return (
    <S.Category>
      <A.TxtParamedicTitle
        $justifyContent='space-between'
      >
        주요 분류
        <S.BtnEdit onClick={()=>setEdit(!edit)}>
          {edit ? '수정완료' : '수정하기'}
        </S.BtnEdit>
      </A.TxtParamedicTitle>
      <S.Col9>
        {options.map((option: string, index: number) => (
          <A.BtnToggle
            key={index}
            $position="relative"
            $border={`0.3vh solid ${theme.color.grayDarkest}`}
            $borderRadius="1.5vh"
            $margin="0 1vh 1.2vh 0"
            $padding="0 3.8vh"
            $width="auto"
            $height="4.5vh"
            $fontSize="2vh"
            $IsClick={selectedIndices.includes(index) ? true : false}
            onClick={() => optionClick(index)}
          >
            {edit && 
            <A.ImgDeleteCategory
            onClick={() => deleteOption(index)}
            $position="absolute" 
            $top="-2vh" 
            $right="0vh" 
            $width="4vh" />}
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
