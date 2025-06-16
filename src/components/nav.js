import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

import StarsButtonIcon from './icon/StarsButtonIcon';
import AddButtonIcon from './icon/AddButtonIcon';
import ChatButtonIcon from './icon/ChatButtonIcon';
import { ReactComponent as ProfileButtonIcon } from '../assets/icon/profile_button.svg';

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
  cursor: pointer;
`;

const NavIcons = styled.div`
  display: flex;
`;

const IconButton = styled.button`
  padding: 0.5rem;
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f9fafb;
  }

  svg {
    width: 35px;
    height: 35px;
    vertical-align: middle;
  }
`;

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Container>
      <Header>
        <Logo onClick={() => navigate('/')}>AIndex</Logo>
        <NavIcons>
          <IconButton title="즐겨찾기" onClick={() => navigate('/stars')}>
            <StarsButtonIcon filled={isActive('/stars')} />
          </IconButton>
          <IconButton title="추가" onClick={() => navigate('/add-ai')}>
            <AddButtonIcon filled={isActive('/add-ai')} />
          </IconButton>
          <IconButton title="채팅" onClick={() => navigate('/chat')}>
            <ChatButtonIcon filled={isActive('/chat')} />
          </IconButton>
          <IconButton title="마이페이지" onClick={() => navigate('/profile')}>
            <ProfileButtonIcon
              style={{
                color: isActive('/profile') ? '#7C3AED' : '#BDBDBD',
              }}
            />
          </IconButton>
        </NavIcons>
      </Header>
    </Container>
  );
};

export default Nav;
