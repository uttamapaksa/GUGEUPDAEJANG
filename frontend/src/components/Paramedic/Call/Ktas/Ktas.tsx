import { useState } from 'react';
import * as S from './Ktas.style';
import A from '/src/components/Commons/Atoms';

function Ktas() {
  const ktasOptions: number[] = [1, 2, 3, 4, 5];
  const [ktasOption, setktasOption] = useState<number | null>(null);
  const ktasDescriptions = [
    '생명 혹은 사지, 신체기능에 잠재적인 위협이 있으며 이에 대한 빠른 치료가 필요한 경우',
    '생명 혹은 사지, 신체기능에 잠재적인 위협이 있으며 이에 대한 빠른 치료가 필요한 경우',
    '생명 혹은 사지, 신체기능에 잠재적인 위협이 있으며 이에 대한 빠른 치료가 필요한 경우',
    '생명 혹은 사지, 신체기능에 잠재적인 위협이 있으며 이에 대한 빠른 치료가 필요한 경우',
    '생명 혹은 사지, 신체기능에 잠재적인 위협이 있으며 이에 대한 빠른 치료가 필요한 경우',
    '생명 혹은 사지, 신체기능에 잠재적인 위협이 있으며 이에 대한 빠른 치료가 필요한 경우',
  ];

  return (
    <S.Ktas>
      <A.TxtParamedicTitle>응급 분류</A.TxtParamedicTitle>
      <S.BtnKtas>
        {ktasOptions.map((ktas) => (
          <A.BtnKtas
            style={{ borderRadius: ktas === 1 ? '1vh 0 0 1vh' : ktas === 5 ? '0 1vh 1vh 0' : 'none' }}
            key={ktas}
            $ktas={`ktas${ktas}` as "ktas1" | "ktas2" | "ktas3" | "ktas4" | "ktas5"}
            $IsClick={ktasOption === ktas}
            onClick={() => setktasOption(ktas)}
          >
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
    </S.Ktas>
  );
}

export default Ktas;
