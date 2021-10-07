import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import heartIconPath from '../../../public/icons/heart.svg';
import userIconPath from '../../../public/icons/user.svg';
import cartIconPath from '../../../public/icons/cart.svg';
import magnifyingGlassIconPath from '../../../public/icons/magnifying-glass.svg';

const ActionsMenuComponent = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledActionItem = styled.a`
  text-decoration: none;
  font-size: 12px;
  color: ${({ theme }) => theme.black};
  cursor: pointer;
  padding: 5px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: ${({ theme }) => theme.midTransition};

  &:last-of-type {
    margin-right: 0;
  }
`;

const ActionItem: React.FC<{ href: string; title: string; iconPath: string }> =
  ({ href, title, iconPath }) => {
    return (
      <Link href={href} passHref>
        <StyledActionItem>
          <Image alt={title} src={iconPath} width={20} height={20} />
          <li>{title}</li>
        </StyledActionItem>
      </Link>
    );
  };

export const ACTIONS_ARRAY = [
  { title: 'Поиск', href: '/search', iconPath: magnifyingGlassIconPath },
  { title: 'Избранное', href: '/favorites', iconPath: heartIconPath },
  { title: 'Войти', href: '/account', iconPath: userIconPath },
  { title: 'Корзина', href: '/cart', iconPath: cartIconPath },
];

export const ActionsMenu: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <ActionsMenuComponent className={className}>
      {ACTIONS_ARRAY.map((item) => (
        <ActionItem key={item.title} {...item} />
      ))}
    </ActionsMenuComponent>
  );
};
