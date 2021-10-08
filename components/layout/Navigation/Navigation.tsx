import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  ${({ theme }) => theme.respondTo.md`
  display: flex;
  flex-direction: column;
  align-items: flex-start;`}
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

const NavItem: React.FC<{ href: string; title: string }> = ({
  href,
  title,
}) => {
  return (
    <Link href={href} passHref>
      <StyledNavItem>{title}</StyledNavItem>
    </Link>
  );
};

export const NAVIGATION_ARRAY = [
  { title: 'Главная', href: '/' },
  { title: 'Доставка и Оплата', href: '/delivery' },
  { title: 'Блог', href: '/blog' },
  { title: 'О нас', href: '/info' },
];

export const Navigation: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Nav className={className}>
      {NAVIGATION_ARRAY.map((item) => (
        <NavItem key={item.title} {...item} />
      ))}
    </Nav>
  );
};
