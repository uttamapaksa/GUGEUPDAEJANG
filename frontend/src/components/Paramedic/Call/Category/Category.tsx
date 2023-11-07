import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CallStateType } from '/src/types/paramedic';
import { tagsState, calledHospitalsState } from '/src/recoils/ParamedicAtoms';
import { currentPosition } from '/src/recoils/HospitalAtoms';
import { addTag, getTags, deleteTag, getHospitals, addCalling } from '/src/apis/paramedic';
import * as S from './Category.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';
import PATH from '/src/constants/path';

function Category({ callState, setCallState }: { callState: CallStateType; setCallState: any }) {
  const [options, setOptions] = useRecoilState(tagsState);
  const [newOption, setNewOption] = useState<string>('');
  const selected: any = callState.tags;
  const [edit, setEdit] = useState<boolean>(false);
  const currPosition = useRecoilValue(currentPosition);
  const [hospitals, setHospitals] = useRecoilState(calledHospitalsState);

  const getOptions = () => {
    getTags().then((res) => {
      if (res) {
        const result = res.map((item: any) => item.tag);
        setOptions(result);
      }
    });
  };

  const addOption = () => {
    if (newOption.trim() === '') return;
    if (options.some((option) => option.name === newOption)) {
      alert('이미 있는 분류입니다.');
      return;
    }
    const data: any = { tagName: newOption };
    addTag(data).then((res: any) => {
      if (res) {
        setOptions((prev) => [...prev, res.tag]);
        setNewOption('');
      }
    });
  };

  const deleteOption = (tagId: number) => {
    deleteTag(tagId).then((res) => {
      if (res) {
        setCallState((prev: any) => ({ ...prev, tags: prev.tags.filter((tag: any) => tag.id !== tagId) }));
        setOptions(options.filter((tag) => tag.id !== tagId));
      }
    });
  };

  const selectOption = (option: any) => {
    if (selected.includes(option)) {
      setCallState((prev: any) => ({ ...prev, tags: prev.tags.filter((tag: any) => tag !== option) }));
    } else {
      setCallState((prev: any) => ({ ...prev, tags: [...prev.tags, option] }));
    }
  };

  interface KtasMapping {
    [key: number]: string; // 'number' 타입의 키를 사용하고, 값은 'string'입니다.
  }
  
  interface AgeGroupMapping {
    [key: string]: string; // 'string' 타입의 키를 사용하고, 값은 'string'입니다.
  }
  
  interface GenderMapping {
    [key: string]: string; // 'string' 타입의 키를 사용하고, 값은 'string'입니다.
  }

  const dataKtas: KtasMapping = {
    1: 'KTAS1',
    2: 'KTAS2',
    3: 'KTAS3',
    4: 'KTAS4',
    5: 'KTAS5',
  };

  const dataAgeGroup: AgeGroupMapping = {
    영유아: 'INFANT',
    아동: 'CHILD',
    청소년: 'ADOLESCENT',
    청년: 'YOUTH',
    중장년: 'MIDDLE',
    노인: 'SENIOR',
  };

  const dataGender: GenderMapping = {
    남: 'MALE',
    여: 'FEMALE',
  };

  const navigate = useNavigate();
  const goToWaitMove = () => {
    const data = {
      ktas: dataKtas[callState.ktas],
      ageGroup: dataAgeGroup[callState.ageGroup],
      gender: dataGender[callState.gender],
      symptom: '',
      latitude: currPosition.lat,
      longitude: currPosition.lon,
      address: '한밭대',
      tags: callState.tags,
      files: [],
    };
    addCalling(data).then((res) => {
      const occurrenceId = res.occurrenceId
      getHospitals(occurrenceId).then((res)=> {
        console.log(res)
      })
    });
    // getHospitals(currPosition.lat, currPosition.lon, 10).then((newHospitals) => {
    //   if (newHospitals) {
    //     const updatedHospitals = updateHospitalsList(hospitals, newHospitals);
    //     setHospitals(updatedHospitals);
    //     navigate(PATH.ParamedicWaitMove);
    //   }
    // });
  };

  // const updateHospitalsList = (hospitals: any, newHospitals: any) => {
  //   const filteredHospitals = hospitals.filter(
  //     (hospital: any) => !newHospitals.some((newHospital: any) => hospital.hospitalId === newHospital.hospitalId),
  //   );
  //   const updatedHospitals = filteredHospitals.concat(newHospitals);
  //   updatedHospitals.sort((a: any, b: any) => a.time - b.time);
  //   return updatedHospitals;
  // };

  // const goToWaitMove = () => {
  //   console.log(callState);
  // const body = {
  //   ktas: dataKtas[callState.ktas],
  //   ageGroup: dataAgeGroup[callState.ageGroup],
  //   gender: dataGender[callState.gender],
  //   symptom: '',
  //   latitude: currPosition.lat,
  //   longitude: currPosition.lon,
  //   address: '한밭대',
  //   tags: [
  //     {
  //       id: 40,
  //       name: '교통사고',
  //     },
  //     {
  //       id: 41,
  //       name: '과다출혈',
  //     },
  //   ],
  //   files: [],
  // };
  // };

  //   getHospitals(currPosition.lat, currPosition.lon, 10).then((newHospitals) => {
  //     if (newHospitals) {
  //       const updatedHospitals = updateHospitalsList(hospitals, newHospitals);
  //       setHospitals(updatedHospitals);
  //       navigate(PATH.ParamedicWaitMove);
  //     }
  //   });
  // };

  useEffect(() => {
    getOptions();
  }, []);

  useEffect(() => {
    console.log(callState);
  });

  return (
    <S.Category>
      <A.TxtParamedicTitle $justifyContent="space-between">
        주요 분류
        <S.BtnEdit onClick={() => setEdit(!edit)}>{edit ? '삭제완료' : '삭제하기'}</S.BtnEdit>
      </A.TxtParamedicTitle>
      <S.Col9>
        {options.map((tag: any) => (
          <A.BtnToggle
            key={tag.id}
            $position="relative"
            $border={`0.3vh solid ${theme.color.grayDarkest}`}
            $borderRadius="1.5vh"
            $margin="0 1vh 1.2vh 0"
            $padding="0 3.8vh"
            $width="auto"
            $height="4.5vh"
            $fontSize="2vh"
            $IsClick={selected.some((option: any) => option.id === tag.id) ? true : false}
            onClick={() => selectOption(tag)}
          >
            {edit && (
              <A.ImgDeleteCategory
                onClick={() => deleteOption(tag.id)}
                $position="absolute"
                $top="-2vh"
                $right="0vh"
                $width="4vh"
              />
            )}
            {tag.name}
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
