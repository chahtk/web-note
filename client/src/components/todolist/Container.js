import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const ContainerStyle = styled.article`
  display: inline-block;
  border: 2px solid
    ${({ type, theme }) =>
      type === 'todo' ? theme.color.green : theme.color.red};
  width: 330px;
  min-height: 200px;
  border-radius: 3%;
  overflow: hidden;
`;

const Container = ({ type }) => {
  /*
    props : type(todo, not-todo)
    ---------
    style
    todo: green, not-todo: red
    ---------
    components
    header : title(props:type), add button
    body : contents(name, start, remove, progress)
  */
  return (
    <ContainerStyle type={type}>
      <Header type={type} />
    </ContainerStyle>
  );
};

export default Container;
