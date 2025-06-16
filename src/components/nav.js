import React from 'react';
import styled from 'styled-components';

import AddButtonIcon from '../assets/icon/add_button.svg';
import ChatButtonIcon from '../assets/icon/chat_button.svg';
import ProfileButtonIcon from '../assets/icon/profile_button.svg';
import StarsButtonIcon from '../assets/icon/stars_button.svg';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1150px;  
  margin: 0 auto; 
  margin-bottom: 40px;
`;

const Logo = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #333333;
  margin: 0;
`;

const NavIcons = styled.div`
  display: flex;
`;

const IconButton = styled.button`
  padding: 0.5rem;
  background: none;
  border: none;
  color: #BDBDBD;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #374151;
    background-color: #f9fafb;
  }

  img {
    width: 35px;
    height: 35px;
  }
`;

const Nav = () => {
  return (
    <Container>
      <Header>
        <Logo>AIndex</Logo>
        <NavIcons>
          <IconButton title="즐겨찾기">
            <img src={StarsButtonIcon} alt="즐겨찾기" />
          </IconButton>
          <IconButton title="추가">
            <img src={AddButtonIcon} alt="추가" />
          </IconButton>
          <IconButton title="채팅">
            <img src={ChatButtonIcon} alt="채팅" />
          </IconButton>
          <IconButton title="마이페이지">
            <img src={ProfileButtonIcon} alt="마이페이지" />
          </IconButton>
        </NavIcons>
      </Header>
    </Container>
  );
};

export default Nav;
