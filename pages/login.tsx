import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { LoginMenu } from '../components/layout/LoginMenu';

const LoginWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
`;

const NavigationItem = styled.a`
  color: ${({ theme }) => theme.silverChalice};
  transition: ${({ theme }) => theme.midTransition};
  text-decoration: none;
  font-size: 24px;
  margin: 0 35px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    width: 0;
    height: 1px;
    background-color: transparent;
    transition: ${({ theme }) => theme.midTransition};
  }

  &.active {
    color: ${({ theme }) => theme.primaryFontColor};

    &::before {
      width: 100%;
      background-color: ${({ theme }) => theme.primaryFontColor};
    }
  }
`;

const Login: React.FC = () => {
  return (
    <LoginWrapper>
      <Navigation>
        <Link href="/login" passHref>
          <NavigationItem className="active">Вход</NavigationItem>
        </Link>
        <Link href="/sign-up" passHref>
          <NavigationItem>Регистрация</NavigationItem>
        </Link>
      </Navigation>
      <LoginMenu />
    </LoginWrapper>
  );
};

export default Login;
