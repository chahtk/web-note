import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  display: inline-block;
  font-weight: bold;
  cursor: pointer;
`;

const SignInButton = ({ setSignModal }) => {
  const openLoginModal = () => setSignModal(true);
  return <ButtonStyle onClick={openLoginModal}>로그인</ButtonStyle>;
};

export default SignInButton;
