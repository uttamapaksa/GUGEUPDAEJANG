import A from '../../Atoms';
import * as S from './LoginFailModal.style';

function LoginFailModal({content, setIsOpen }: { content: string, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  
  return (
    <S.Overlay onClick={() => setIsOpen(false)}>
      <S.Content>
        <S.Title>
          {content}
        </S.Title>
      </S.Content>
    </S.Overlay>
  );
}

export default LoginFailModal;
