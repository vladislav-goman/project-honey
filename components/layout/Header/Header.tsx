import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import styled from 'styled-components';
import { Logo } from '../../common/Logo';
import { Button } from '../../common/Button';
import { Navigation } from '../Navigation';
import { ActionsMenu } from '../ActionsMenu';
import { HamburgerMenu } from '../../common/HamburgerMenu';

const HeaderElement = styled.header`
  padding: 25px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.respondTo.md`
    display: none;`}
`;

const MobileHeaderElement = styled.header`
  display: none;

  ${({ theme }) => theme.respondTo.md`
    display: flex;
  align-items: center;
  justify-content: space-between;`}
`;

const MobileMenu = styled.div<{ showMenu?: boolean }>`
  position: fixed;
  top: 0;
  left: ${(props) => (props?.showMenu ? 0 : '-100%')};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  z-index: 100;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.mercury};
  transition: ${({ theme }) => theme.midTransition};
`;

const NavigationGroup = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.respondTo.md`
  flex-direction: column;
  align-items: flex-start;`}
`;

const StyledNavigation = styled(Navigation)`
  margin-left: 30px;

  ${({ theme }) => theme.respondTo.md`
  margin-left: 0;`}
`;

const StyledNavItem = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  cursor: pointer;
  padding: 5px 10px;
  margin-right: 25px;
  transition: ${({ theme }) => theme.midTransition};
  ${({ theme }) => theme.respondTo.md`
  margin-bottom: .5rem;`}

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Header: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const onClickHandler = () => setShowMobileMenu((showMenu) => !showMenu);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <HeaderElement>
            <Logo />
            <NavigationGroup>
              <Link href="/catalogue">
                <a>
                  <Button title="Каталог" />
                </a>
              </Link>
              <StyledNavigation />
            </NavigationGroup>
            <ActionsMenu />
          </HeaderElement>
          <MobileHeaderElement>
            <Logo />
            <HamburgerMenu onClick={onClickHandler} />
            <MobileMenu showMenu={showMobileMenu}>
              <NavigationGroup>
                <Link href="/catalogue">
                  <StyledNavItem>Каталог</StyledNavItem>
                </Link>
                <StyledNavigation />
              </NavigationGroup>
              <ActionsMenu />
            </MobileMenu>
          </MobileHeaderElement>
        </Col>
      </Row>
    </Container>
  );
};
