import * as S from './Ktas.style';
import A from '/src/components/Commons/Atoms';
import { CallStateType } from '/src/types/paramedic';

function Ktas({ callState, setCallState }: { callState: CallStateType, setCallState: any }) {
  const ktasOptions: number[] = [1, 2, 3, 4, 5];
  const selectedKtas = callState.ktas;
  const ktasDescriptions = [
    null,
    '즉각적인 처치가 필요하며 생명이나 사지를 위협하는(또는 악화 가능성이 높은) 상태',
    '생명 혹은 사지, 신체기능에 잠재적인 위협이 있으며 이에 대한 빠른 치료가 필요한 경우',
    '치료가 필요한 상태로 진행할 수도 있는 잠재적 가능성을 고려해야 하는 경우',
    '환자의 나이, 통증이나 악화/합병증에 대한 가능성을 고려할 때 1~2시간 안에 처치나 재평가를 시행하면 되는 상태',
    '긴급하지만 응급은 아닌 상태, 만성적인 문제로 인한 것이거나, 악화의 가능성이 낮은 상태',
  ];
  const clickKtas = (ktas: number) => {
    setCallState((prev: any) => ({
      ...prev,
      ktas: ktas,
    }));
  };

  return (
    <S.Ktas>
      <A.TxtParamedicTitle>응급 분류</A.TxtParamedicTitle>
      <S.BtnKtas>
        {ktasOptions.map((ktas) => (
          <A.BtnKtas
            key={ktas}
            $ktas={`ktas${ktas}` as 'ktas1' | 'ktas2' | 'ktas3' | 'ktas4' | 'ktas5'}
            $IsClick={selectedKtas === ktas}
            onClick={() => clickKtas(ktas)}
          >
            {`KTAS${ktas}`}
          </A.BtnKtas>
        ))}
      </S.BtnKtas>
      <S.TxtKtas>
        {selectedKtas ? (
          <span>
            <strong>{`KTAS${selectedKtas} : `}</strong>
            {ktasDescriptions[selectedKtas]}
          </span>
        ) : null}
      </S.TxtKtas>
    </S.Ktas>
  );
}

export default Ktas;
