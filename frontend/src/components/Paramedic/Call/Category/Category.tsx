import { useState, useEffect } from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { addTag, getTags, deleteTag, addCalling, getHospitals } from '/src/apis/paramedic';
import { TagType } from '/src/types/paramedic';
import {
  currentParamedicPageIndexState,
  recordImageFile,
  recordVideoFile,
  recordVoiceFile,
  recordContentFile,
  tagsState,
  occurrenceState,
  callingStepState,
  HospitalListState,
  currentAddressState,
} from '/src/recoils/ParamedicAtoms';
import { currentPosition } from '/src/recoils/HospitalAtoms';
import * as S from './Category.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';
import { OccurrenceType } from '/src/types/paramedic';
import Spinner from '/src/components/libraries/Spinner/Spinner';

function Category() {
  const setCurrentPageIndex = useSetRecoilState(currentParamedicPageIndexState);
  const currPosition = useRecoilValue(currentPosition);
  const currAddress = useRecoilValue(currentAddressState)
  const [occurence, setOccurence] = useRecoilState(occurrenceState);
  const selected = occurence.tags;
  const [options, setOptions] = useRecoilState(tagsState);
  const [newOption, setNewOption] = useState<string>('');
  const [edit, setEdit] = useState<boolean>(false);
  const recordImage = useRecoilValue(recordImageFile);
  const recordVideo = useRecoilValue(recordVideoFile);
  const recordVoice = useRecoilValue(recordVoiceFile);
  const recordContent = useRecoilValue(recordContentFile);
  const [callingStep, setCallingStep] = useRecoilState(callingStepState);
  const setHospitals = useSetRecoilState(HospitalListState);
  const [showSpinner, setShowSpinner] = useState(false);

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
      console.log("newTagData",newTagData)
      if (newTagData) {
        setOptions((prev) => [...prev, newTagData.tag]);
        setNewOption('');
        selectOption(newTagData.tag)
      }
    });
    
  };

  const deleteOption = (tagId: number) => {
    deleteTag(tagId).then((success) => {
      if (success) {
        setOccurence((prev) => ({ ...prev, tags: selected.filter((tag) => tag.id !== tagId) }));
        setOptions(options.filter((option) => option.id !== tagId));
      }
    });
  };

  const selectOption = (option: TagType) => {
    console.log("option",option)
    if (selected.some((tag) => tag.id === option.id)) {
      setOccurence((prev) => ({ ...prev, tags: selected.filter((tag) => tag.id !== option.id) }));
    } else {
      setOccurence((prev) => ({ ...prev, tags: [...selected, option] }));
    }
  };

  const goToWaitMove = () => {
    if (showSpinner) return;
    setShowSpinner(true);
    let data: OccurrenceType = {
      ktas: occurence.ktas,
      ageGroup: occurence.ageGroup,
      gender: occurence.gender,
      symptom: recordContent,
      // latitude: 36.4469365928189,
      // longitude: 127.43940812262,
      latitude: currPosition.lat as number,
      longitude: currPosition.lon as number,
      address: currAddress,
      tags: selected,
      files: [recordImage, recordVoice, recordVideo].filter(Boolean),
      // 해당 값을 boolean 으로 바꾸어 truthy 할 경우만 return
    };
    setOccurence(data);
    addCalling(data).then((occurrenceIdData) => {
      if (occurrenceIdData) {
        let data = {
          occurrenceId: occurrenceIdData.occurrenceId,
          distance: 5 * (callingStep.step + 1) + 0.1, // 무조건 실수
          step: callingStep.step + 1,
        };
        console.log(data)
        getHospitals(data).then((hospitalsData) => {
          setShowSpinner(false);
          setCallingStep((prev)=>({occurrenceId: occurrenceIdData.occurrenceId, step: prev.step + 1}))
          if (hospitalsData) {
            
            setHospitals(hospitalsData);
            setCurrentPageIndex(2);
          }
        });
      } else {
        setShowSpinner(false);
      }
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
            $IsClick={selected.some((tag) => tag.id === option.id)}
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
          $position='relative'
          $margin="10vh 0 0 0 "
          $borderRadius="1vh"
          $width="100%"
          $height="6vh"
          $backgroundColor={theme.color.fontPink1}
          $fontSize="2.5vh"
        >
          {showSpinner ? <Spinner position='absolute' width='12vh' height='8vh' top='-1.25vh' color='white' /> : '이송 요청'}
        </A.BtnSubmit>
      </S.Col9>
    </S.Category>
  );
}

export default Category;
