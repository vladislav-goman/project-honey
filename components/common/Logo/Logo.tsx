import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import logoPath from '../../../public/icons/site-logo.svg';

const LogoContainer = styled.a`
  cursor: pointer;
`;

export const Logo: React.FC = () => {
  return (
    <Link href="/" passHref>
      <LogoContainer>
        <Image src={logoPath} alt="Логотип сайта" />
      </LogoContainer>
    </Link>
  );
};
