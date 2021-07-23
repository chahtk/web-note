import React from 'react';
import styled, { keyframes } from 'styled-components';

const modalFade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 70%;
  }
`;

const SignModalStyle = styled.div`
  background-color: grey;
  opacity: 70%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation: ${modalFade} 0.2s;
`;

const SignModal = ({ setSignModal }) => {
  const closeSignModal = () => setSignModal(false);
  return <SignModalStyle onClick={closeSignModal}>1</SignModalStyle>;
};

export default SignModal;
