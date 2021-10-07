import React from 'react';
import styled from 'styled-components';

const LinkElement = styled.a`
  padding: 15px 30px;
  text-align: center;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.primaryColor};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.white};
  font-weight: 600;
  transition: ${({ theme }) => theme.midTransition};

  &:hover {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.primaryColor};
    border: 1px solid ${({ theme }) => theme.primaryColor};
  }
`;

export const Link: React.FC<{ children: string; href: string }> = ({
  children,
  href,
}) => {
  return <LinkElement href={href}>{children}</LinkElement>;
};
