import { useState } from 'react';
import * as S from './Call.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';

function Call() {
  const ktasOptions: number[] = [1, 2, 3, 4, 5];
  const [ktasOption, setktasOption] = useState<number | null>(null);
  const ktasDescriptions = [
    undefined,
    '생명 혹은 사지, 신체기능에 잠재적인 위협이 있으며 이에 대한 빠른 치료가 필요한 경우',
    '생명 혹은 사지, 신체기능에 잠재적인 위협이 있으며 이에 대한 빠른 치료가 필요한 경우',
    '생명 혹은 사지, 신체기능에 잠재적인 위협이 있으며 이에 대한 빠른 치료가 필요한 경우',
    '생명 혹은 사지, 신체기능에 잠재적인 위협이 있으며 이에 대한 빠른 치료가 필요한 경우',
    '생명 혹은 사지, 신체기능에 잠재적인 위협이 있으며 이에 대한 빠른 치료가 필요한 경우',
  ];

  const ageGroups = [
    "영유아", "아동", "청소년", "청년", "중장년", "노인"
  ];
  
  const genders = ["(남)", "(여)"];
  
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  const [toggleOptions, setToggleOptions] = useState<string[]>([
    '심정지',
    '추락',
    '과다출혈',
    '심정지 이력',
    '정신질환 이력',
  ]);

  const [newStr, setNewStr] = useState<string>('');

  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  const handleToggleClick = (index: number) => {
    if (selectedIndices.includes(index)) {
      setSelectedIndices(selectedIndices.filter((i) => i !== index));
    } else {
      setSelectedIndices([...selectedIndices, index]);
    }
  };

  const addOption = () => {
    if (newStr.trim() === '') return;
    setToggleOptions((prev) => [...prev, newStr]);
    setNewStr('');
  };

  return (
    <S.Container>
      <S.ContentBox>
        <S.ParamedicHeader>
          <S.Arrow>
            <A.ImgArrowLeft />
          </S.Arrow>
          <A.TxtHeaderTitle>환자 등록</A.TxtHeaderTitle>
          <S.Arrow>
            <A.ImgArrowRight />
          </S.Arrow>
        </S.ParamedicHeader>

        <S.Blank />

        <S.Ktas>
          <A.TxtParamedicTitle>응급 분류</A.TxtParamedicTitle>
          <S.Col9>
            <S.BtnKtas>
            {ktasOptions.map((ktas) => (
              <A.BtnKtas
                style={{borderRadius: ktas === 1 ? '1vh 0 0 1vh' : ktas === 5 ? '0 1vh 1vh 0' : 'none' }}
                key={ktas}
                $ktas={`ktas${ktas}`}
                $width="20%"
                $height='100%'
                $IsClick={ktasOption === ktas}
                onClick={() => setktasOption(ktas)}>
                {`KTAS${ktas}`}
              </A.BtnKtas>
           ))}
            </S.BtnKtas>
            <S.TxtKtas>
              <span>
              <strong>{ktasOption && `KTAS${ktasOption} : `}</strong>
              {ktasOption && ktasDescriptions[ktasOption]}
              </span>
            </S.TxtKtas>
          </S.Col9>
        </S.Ktas>

        <S.Blank />

        <S.Information>
          <A.TxtParamedicTitle>인적 정보</A.TxtParamedicTitle>
          <S.Col9>
          {ageGroups.map((group) => (
            genders.map((gender) => (
              <A.BtnToggle
                key={`${group} ${gender}`}
                $border={theme.color.grayDarkest}
                $width="23%"
                $height="30%"
                onClick={() => setSelectedGroup(`${group} ${gender}`)}
                $IsClick={selectedGroup === `${group} ${gender}`? true : false}
              >
                {group}
                <br />
                {gender}
              </A.BtnToggle>
            ))
          ))}
          </S.Col9>
        </S.Information>

        <S.Blank />

        <S.Status>
          <A.TxtParamedicTitle>환자 상태</A.TxtParamedicTitle>
          <S.Col9>
            <A.BtnMediaRecord
              $justifyContent="space-between"
              $padding="0 1.5vh"
              $width="45%"
              $height="20%"
              $color={theme.color.pinkLight}
              $border={theme.color.pinkLight}
            >
              <A.ImgRecordVideoPink $width="18%" />
              <div style={{ fontSize: theme.font.Medium1_30 }}>영상 촬영</div>
              <A.ImgArrowPinkRight $width="6%" />
            </A.BtnMediaRecord>
            <A.BtnMediaRecord
              $justifyContent="space-between"
              $padding="0 1vh"
              $width="45%"
              $height="20%"
              $color={theme.color.pinkLight}
              $border={theme.color.pinkLight}
            >
              <A.ImgRecordVoicePink $width="12%" />
              <div style={{ fontSize: theme.font.Medium1_30 }}>음성 녹음</div>
              <A.ImgArrowPinkRight $width="6%" />
            </A.BtnMediaRecord>
            <S.TxtStatus>
              지금 대교 사고 10대 여성 머리 출혈 환자 발생하였습니다. 심정지 이력이 있는 환자입니다
            </S.TxtStatus>
          </S.Col9>
        </S.Status>

        <S.Blank />

        <S.Category>
          <A.TxtParamedicTitle>주요 분류</A.TxtParamedicTitle>
          <S.Col9 style={{ justifyContent: 'start' }}>
            {toggleOptions.map((option: string, index: number) => (
              <A.BtnToggle
                key={index}
                $border={theme.color.grayDarkest}
                $margin="0.5vh 1vh 1vh 0"
                $padding="0 3.5vh"
                $width="auto"
                $height="4vh"
                onClick={() => handleToggleClick(index)}
                $IsClick={selectedIndices.includes(index)? true : false}
              >
                {option}
              </A.BtnToggle>
            ))}
          </S.Col9>
          <S.Col9
            style={{marginTop: '1.5vh'}}
          >
          <A.IptUserInfo
              $border="3px solid purple"
              $width="70%"
              $height="4vh"
              $fontSize={theme.font.Medium2_24}
              onChange={(e) => setNewStr(e.target.value)}
              value={newStr}
            ></A.IptUserInfo>
            <A.BtnSubmit
              onClick={addOption}
              // $border="3px solid purple"
              $margin="0 auto"
              $width="20%"
              $height="4vh"
              $backgroundColor={theme.color.grayDark}
              $fontSize={theme.font.Medium4_22}
            >
              추가
            </A.BtnSubmit>
            <A.BtnSubmit
              // $border="3px solid purple"
              $margin='10vh 0 0 0 '
              $width="100%"
              $height="6vh"
              $backgroundColor={theme.color.fontPink1}
              $fontSize={theme.font.Medium2_24}
            >
              이송 요청
            </A.BtnSubmit>
          </S.Col9>
        </S.Category>

        <S.Blank />
      </S.ContentBox>
    </S.Container>
  );
}

export default Call;
