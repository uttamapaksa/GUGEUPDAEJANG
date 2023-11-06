import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CallStateType } from '/src/types/paramedic';
import { categoriesState, calledHospitalsState } from '/src/recoils/ParamedicAtoms';
import { currentPosition } from '/src/recoils/HospitalAtoms';
import { getHospitalList } from '/src/apis/paramedic';
import * as S from './Category.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';
import PATH from '/src/constants/path';

function Category({ callState, setCallState }: { callState: CallStateType; setCallState: any }) {
  const [options, setOptions] = useRecoilState(categoriesState);
  const [newOption, setNewOption] = useState<string>('');
  const selected: string[] | undefined = callState.tags;
  const [edit, setEdit] = useState<boolean>(false);
  const currPosition = useRecoilValue(currentPosition);
  const [hospitals, setHospitals] = useRecoilState(calledHospitalsState);

  const addToState = (option: string) => setCallState((prev: any) => ({ ...prev, tags: [...prev.tags, option] }));
  const deleteToState = (option: string) =>
    setCallState((prev: any) => ({ ...prev, tags: prev.tags.filter((i: string) => i !== option) }));
  const addToOptions = (option: string) => {
    setOptions((prev) => [...prev, option]);
    setNewOption('');
  };
  const deleteToOptions = (option: string) => setOptions(options.filter((i) => i !== option));

  const optionClick = (option: string) => {
    if (selected && selected.includes(option)) {
      deleteToState(option);
    } else {
      addToState(option);
    }
  };
  const addOption = () => {
    if (newOption.trim() === '') return;
    if (options.includes(newOption)) {
      alert('이미 있는 분류입니다.');
      return;
    }
    addToOptions(newOption);
  };
  const deleteOption = (option: string) => {
    deleteToOptions(option);
    deleteToState(option);
  };

  const updateHospitalsList = (hospitals: any, newHospitals: any) => {
    newHospitals.forEach((newHospital: any) => {
      const index = hospitals.findIndex((h: any) => h.callingId === newHospital.callingId);
      if (index > -1) {
        hospitals[index] = newHospital;
      } else {
        hospitals.push(newHospital);
      }
    });
  
    // time을 기준으로 배열을 정렬합니다. 만약 time이 동일한 경우 callingId로 2차 정렬을 수행합니다.
    // hospitals.sort((a, b) => a.time - b.time || a.callingId - b.callingId);
  
    return hospitals;
  };

  const navigate = useNavigate();
  const goToWaitMove = (hospitals: any) => {
    getHospitalList(currPosition.lat, currPosition.lon, 10).then((newHospitals) => {
      if (newHospitals) {
        const updatedHospitals = updateHospitalsList(hospitals, newHospitals);
        setHospitals(updatedHospitals);
        navigate(PATH.ParamedicWaitMove);
      }
    });
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
            $IsClick={selected && selected.includes(option) ? true : false}
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
          onClick={()=>goToWaitMove(hospitals)}
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
