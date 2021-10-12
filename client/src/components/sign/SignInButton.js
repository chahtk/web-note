import React, { useState } from 'react';
import styled from 'styled-components';
import ModalBackground from '../modal/ModalBackground';

const ButtonStyle = styled.div`
  display: inline-block;
  font-weight: bold;
  cursor: pointer;
`;

const SignInButton = () => {
  const [modal, setModal] = useState(false);
  const openLoginModal = () => setModal(true);
  return (
    <>
      {modal ? <ModalBackground setModal={setModal} /> : null}
      <ButtonStyle onClick={openLoginModal}>로그인</ButtonStyle>
    </>
  );
};

export default SignInButton;
