import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const FooterMenuNav = styled.nav``;

const FooterMenuTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 25px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.primaryFont};
`;

const FooterMenuList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const FooterMenuItem = styled.li`
  margin-bottom: 25px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const FooterMenuLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.secondaryFontColor};
  transition: ${({ theme }) => theme.midTransition};
`;

export const FooterMenu: React.FC<{
  title: string;
  links: Array<{ label: string; href: string }>;
}> = ({ title, links }) => {
  return (
    <FooterMenuNav>
      <FooterMenuTitle>{title}</FooterMenuTitle>
      <FooterMenuList>
        {links.map(({ label, href }: { label: string; href: string }) => (
          <FooterMenuItem key={label}>
            <Link href={href} passHref>
              <FooterMenuLink>{label}</FooterMenuLink>
            </Link>
          </FooterMenuItem>
        ))}
      </FooterMenuList>
    </FooterMenuNav>
  );
};
