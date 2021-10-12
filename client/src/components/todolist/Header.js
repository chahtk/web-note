import React, { useState } from 'react';
import styled from 'styled-components';
import ModalBackground from '../modal/ModalBackground';

const HeaderStyle = styled.article`
  position: relative;
  text-align: center;
  border-bottom: 2px solid
    ${({ type, theme }) =>
      type === 'todo' ? theme.color.green : theme.color.red};
`;

const Title = styled.article`
  font: 16px bold;
  display: inline;
`;
const AddButton = styled.button`
  position: absolute;
  right: 0;
  outline: none;
  border: none;
  background-color: inherit;
`;

const Header = ({ type }) => {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  return (
    <HeaderStyle type={type}>
      <Title type={type}>{type}</Title>
      <AddButton onClick={openModal}>+</AddButton>
      {modal ? <ModalBackground setModal={setModal} /> : null}
    </HeaderStyle>
  );
};

export default Header;
