import { useState } from 'react';
import * as S from './SearchModal.style';
import Modal from 'react-modal';

function SearchModal() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal isOpen={isOpen} style={S.modalStyle}>
      모달 내용
    </Modal>
  );
}

export default SearchModal;
