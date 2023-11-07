import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { addTag, getTags, deleteTag, addCalling, getHospitals } from '/src/apis/paramedic';
import { tagsState, calledHospitalsState, occurrenceState, HospitalListState } from '/src/recoils/ParamedicAtoms';
import { TagType } from '/src/types/paramedic';
import { currentPosition } from '/src/recoils/HospitalAtoms';
import * as S from './Category.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';
import PATH from '/src/constants/path';

function Category() {
  const currPosition = useRecoilValue(currentPosition);
  const [occurence, setOccurence] = useRecoilState(occurrenceState);
  const selected = occurence.tags;
  const [options, setOptions] = useRecoilState(tagsState);
  const [newOption, setNewOption] = useState<string>('');
  const [edit, setEdit] = useState<boolean>(false);
  const navigate = useNavigate();
  const [hospitals, setHospitals] = useRecoilState(HospitalListState);

  const getOptions = () => {
    getTags().then((tagsData) => {
      if (tagsData) {
        const res = tagsData.map((item: any) => item.tag);
        setOptions(res);
      }
    });
  };

  const addOption = () => {
    if (newOption.trim() === '') return;
    if (options.some((option) => option.name === newOption)) {
      alert('이미 있는 분류입니다.');
      return;
    }
    const data = { tagName: newOption };
    addTag(data).then((newTagData: any) => {
      if (newTagData) {
        setOptions((prev) => [...prev, newTagData.tag]);
        setNewOption('');
      }
    });
  };

  const deleteOption = (tagId: number) => {
    deleteTag(tagId).then((success) => {
      if (success) {
        setOccurence((prev) => ({ ...prev, tags: prev.tags.filter((tag) => tag.id !== tagId) }));
        setOptions(options.filter((option) => option.id !== tagId));
      }
    });
  };

  const selectOption = (option: TagType) => {
    if (selected.includes(option)) {
      setOccurence((prev) => ({ ...prev, tags: prev.tags.filter((tag) => tag !== option) }));
    } else {
      setOccurence((prev) => ({ ...prev, tags: [...prev.tags, option] }));
    }
  };

  const goToWaitMove = () => {
    let data = {
      ktas: occurence.ktas,
      ageGroup: occurence.ageGroup,
      gender: occurence.gender,
      symptom: '',
      latitude: currPosition.lat,
      longitude: currPosition.lon,
      address: '한밭대',
      tags: occurence.tags,
      files: [],
    };
    addCalling(data).then((occurrenceIdData) => {
      let data = {
        occurrenceId: occurrenceIdData.occurrenceId,
        distance: 10.1 // 무조건 실수
      };
      console.log(data);
      getHospitals(data).then((hospitalsData) => {
        console.log(hospitalsData);
        setHospitals(hospitalsData);
        navigate(PATH.ParamedicWaitMove);
      });
    });
  };

  useEffect(() => {
    getOptions();
  }, []);
  
  return (
    <S.Category>
      <A.TxtParamedicTitle $justifyContent="space-between">
        주요 분류
        <S.BtnEdit onClick={() => setEdit(!edit)}>{edit ? '삭제완료' : '삭제하기'}</S.BtnEdit>
      </A.TxtParamedicTitle>
      <S.Col9>
        {options.map((option) => (
          <A.BtnToggle
            key={option.id}
            $position="relative"
            $border={`0.3vh solid ${theme.color.grayDarkest}`}
            $borderRadius="1.5vh"
            $margin="0 1vh 1.2vh 0"
            $padding="0 3.8vh"
            $width="auto"
            $height="4.5vh"
            $fontSize="2vh"
            $IsClick={selected.some((tag) => tag.id === option.id) ? true : false}
            onClick={() => selectOption(option)}
          >
            {edit && (
              <A.ImgDeleteCategory
                onClick={() => deleteOption(option.id)}
                $position="absolute"
                $top="-2vh"
                $right="0vh"
                $width="4vh"
              />
            )}
            {option.name}
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
