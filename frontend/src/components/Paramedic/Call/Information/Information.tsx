import { useState } from 'react';
import * as S from './Information.style';
import A from '/src/components/Commons/Atoms';

function Information(setCallState: any) {
  const ageGroups = ['영유아', '아동', '청소년', '청년', '중장년', '노인'];
  const genders = ['(남)', '(여)'];
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const clickGroup = (ageGroup: string, gender: string) => {
    setSelectedGroup(`${ageGroup} ${gender}`)
    setCallState((prev: any) => ({
      ...prev,
      ageGroup,
      gender,
    }));
  };

  return (
    <S.Information>
      <A.TxtParamedicTitle>인적 정보</A.TxtParamedicTitle>
      <S.Col9>
        {ageGroups.map((ageGroup) =>
          genders.map((gender) => (
            <A.BtnToggle
              key={`${ageGroup} ${gender}`}
              $border='0.3vh solid #DCDCE0'
              $borderRadius='1.7vh'
              $width="23%"
              $height="9.8vh"
              $margin="0 0 1.3vh 0"
              $fontSize='1.9vh'
              onClick={() => clickGroup(ageGroup, gender)}
              $IsClick={selectedGroup === `${ageGroup} ${gender}` ? true : false}
            >
              {ageGroup}
              <br />
              {gender}
            </A.BtnToggle>
          )),
        )}
      </S.Col9>
    </S.Information>
  );
}

export default Information;
