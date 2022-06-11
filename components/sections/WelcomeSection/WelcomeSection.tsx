import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import welcomeImage from '../../../public/images/welcome-image.png';
import backgroundImage from '../../../public/images/welcome-background.png';
import { Button } from '../../common/Button';

const WelcomeSectionComponent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 110px 0 200px;
  position: relative;
  overflow: hidden;

  ${({ theme }) => theme.respondTo.md`
  padding: 2rem 0 3rem`}
`;

const WelcomeHeader = styled.h1`
  font-size: 64px;
  line-height: 60px;
  font-weight: 700;
  margin-bottom: 50px;
  max-width: 600px;
  text-align: center;

  ${({ theme }) => theme.respondTo.md`
  font-size: 34px;
  line-height: 30px;`}
`;

const ImageContainer = styled.div`
  position: relative;
  right: -45px;
  margin-bottom: 60px;

  ${({ theme }) => theme.respondTo.md`
  right: 0;
  margin-bottom: 2rem;`}
`;

const BackgroundImageContainer = styled.div`
  position: absolute;
  z-index: -1;
  top: -10%;
  left: 50%;
  transform: translateX(-45%);
  width: 120%;

  ${({ theme }) => theme.respondTo.md`
  display: none`}
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

export const WelcomeSection: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <WelcomeSectionComponent>
            <WelcomeHeader>Натуральный мёд из села Кадымка</WelcomeHeader>
            <ImageContainer>
              <Image src={welcomeImage} alt="Натуральный мёд из села Кадымка" />
            </ImageContainer>
            <Link href="/catalogue">
              <StyledLink>
                <Button title="Заказать мёд" />
              </StyledLink>
            </Link>

            <BackgroundImageContainer>
              <Image src={backgroundImage} alt="Фоновое изображение" />
            </BackgroundImageContainer>
          </WelcomeSectionComponent>
        </Col>
      </Row>
    </Container>
  );
};
