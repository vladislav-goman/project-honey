import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import styled from 'styled-components';
import { Logo } from '../../common/Logo';
import { Button } from '../../common/Button';
import { Navigation } from '../Navigation';
import { ActionsMenu } from '../ActionsMenu';

const HeaderElement = styled.header`
  padding: 25px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavigationGroup = styled.div`
  display: flex;
  align-items: center;
`;

const StyledNavigation = styled(Navigation)`
  margin-left: 30px;
`;

export const Header: React.FC = () => {
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
        </Col>
      </Row>
    </Container>
  );
};
