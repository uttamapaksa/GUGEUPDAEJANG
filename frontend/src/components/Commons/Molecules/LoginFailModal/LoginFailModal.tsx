import * as S from './LoginFailModal.style';

interface LoginFailModalProps {
  content: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function LoginFailModal({ content, setIsOpen }: LoginFailModalProps) {

  return (
    <S.Overlay onClick={() => setIsOpen(false)}>
      <S.Content>
        <S.Title>{content}</S.Title>
      </S.Content>
    </S.Overlay>
  );
}

export default LoginFailModal;
