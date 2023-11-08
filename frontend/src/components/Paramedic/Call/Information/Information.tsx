import { useRecoilState } from 'recoil';
import { occurrenceState } from '/src/recoils/ParamedicAtoms';
import * as S from './Information.style';
import A from '/src/components/Commons/Atoms';

interface GroupMapping {
  [key: string]: string;
}
const ageGroupMapping: GroupMapping = {
  INFANT: '영유아',
  CHILD: '아동',
  ADOLESCENT: '청소년',
  YOUTH: '청년',
  MIDDLE: '중장년',
  SENIOR: '노인',
};
const genderMapping: GroupMapping = {
  MALE: '남',
  FEMALE: '여',
};

const ageGroups = ['INFANT', 'CHILD', 'ADOLESCENT', 'YOUTH', 'MIDDLE', 'SENIOR'];
const genders = ['MALE', 'FEMALE'];

function Information() {
  const [occurence, setOccurence] = useRecoilState(occurrenceState);
  const selectedAgeGroup = occurence.ageGroup;
  const selectedGender = occurence.gender;

  const selectInformation = (ageGroup: string, gender: string) => {
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
              onClick={() => selectInformation(ageGroup, gender)}
            >
              {ageGroupMapping[ageGroup]}
              <br />({genderMapping[gender]})
            </A.BtnToggle>
          )),
        )}
      </S.Col9>
    </S.Information>
  );
}

export default Information;
