import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import styled from 'styled-components';
import { FooterMenu, FooterMenuLink } from '../FooterMenu';
import { CompanyMenu, ProductionMenu } from './footerConfig';

const FooterElement = styled.footer`
  padding: 100px 0;
`;

const FooterLink = styled.a`
  display: block;
  font-weight: 600;
  margin-bottom: 25px;
  font-size: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: ${({ theme }) => theme.primaryFont};
  transition: ${({ theme }) => theme.midTransition};
`;

const FooterText = styled.h3`
  display: block;
  margin-bottom: 25px;
  font-size: 16px;
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: ${({ theme }) => theme.primaryFont};
`;

const FooterTextMuted = styled.h3`
  display: block;
  font-size: 16px;
  color: ${({ theme }) => theme.secondaryFontColor};
  font-family: ${({ theme }) => theme.primaryFont};
`;

export const Footer: React.FC = () => {
  return (
    <FooterElement>
      <Container>
        <Row>
          <Col lg={2}>
            <FooterMenu {...ProductionMenu} />
          </Col>
          <Col lg={2}>
            <FooterMenu {...CompanyMenu} />
          </Col>
          <Col lg={3}>
            <Link href="/privacy" passHref>
              <FooterLink>Политика конфеденциальности</FooterLink>
            </Link>
            <Link href="/privacy" passHref>
              <FooterLink>Доставка и оплата</FooterLink>
            </Link>
            <Link href="/privacy" passHref>
              <FooterLink>Сотрудничество</FooterLink>
            </Link>
            <Link href="/privacy" passHref>
              <FooterLink>FAQ</FooterLink>
            </Link>
          </Col>
          <Col lg={2}>
            <FooterText>
              103021 Москва,
              <br /> ул. Пушкинская 29-22
            </FooterText>
            <FooterMenuLink href="mailto:info@kadmed.ru">
              info@kadmed.ru
            </FooterMenuLink>
          </Col>
          <Col lg={3}>
            <FooterTextMuted>Бесплатный звонок по Росии</FooterTextMuted>
            <FooterLink href="tel:8 800 222-33-22">8 800 222-33-22</FooterLink>
            <FooterTextMuted>
              Принимаем звонки
              <br /> с ПН по ПТ, с 9 до 20 по Москве
            </FooterTextMuted>
          </Col>
        </Row>
      </Container>
    </FooterElement>
  );
};
