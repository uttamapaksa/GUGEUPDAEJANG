import { useRecoilState } from 'recoil';
import { occurrenceState } from '/src/recoils/ParamedicAtoms';
import * as S from './Information.style';
import A from '/src/components/Commons/Atoms';

interface AgeGroupMapping {
  [key: string]: string;
}
interface GenderMapping {
  [key: string]: string;
}

const ageGroupMapping: AgeGroupMapping = {
  영유아: 'INFANT',
  아동: 'CHILD',
  청소년: 'ADOLESCENT',
  청년: 'YOUTH',
  중장년: 'MIDDLE',
  노인: 'SENIOR',
};
const genderMapping: GenderMapping = {
  남: 'MALE',
  여: 'FEMALE',
};

const ageGroups = ['영유아', '아동', '청소년', '청년', '중장년', '노인'];
const genders = ['남', '여'];

function Information() {
  const [occurence, setOccurence] = useRecoilState(occurrenceState);
  const selectedAgeGroup = occurence.ageGroup;
  const selectedGender = occurence.gender;

  const selectInformation = (ageGroup: string, gender: string) => {
    console.log(occurence);
    setOccurence((prev) => ({
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
              $border="0.3vh solid #DCDCE0"
              $borderRadius="1.7vh"
              $width="23%"
              $height="9.8vh"
              $margin="0 0 1.3vh 0"
              $fontSize="1.9vh"
              $IsClick={selectedAgeGroup === ageGroup && selectedGender === gender ? true : false}
              onClick={() => selectInformation(ageGroupMapping[ageGroup], genderMapping[gender])}
            >
              {ageGroup}
              <br />({gender})
            </A.BtnToggle>
          )),
        )}
      </S.Col9>
    </S.Information>
  );
}

export default Information;
