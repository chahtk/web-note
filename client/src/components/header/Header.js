import React from 'react';
import styled from 'styled-components';
import SignInButton from '../sign/SignInButton';

const HeaderStyle = styled.header`
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: inherit;
  border-bottom: 1px solid grey;
`;

const RightMenu = styled.div`
  display: flex;
  float: right;
  height: 100%;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <RightMenu>
        <SignInButton />
      </RightMenu>
    </HeaderStyle>
  );
};

export default Header;
