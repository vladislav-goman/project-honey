import React from 'react';
import styled from 'styled-components';

const ButtonElement = styled.button`
  padding: 15px 30px;
  text-align: center;
  border-radius: 4px;
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

export const Button: React.FC<{
  title: string;
  onClick?: () => void;
  className?: string;
}> = ({ title, onClick, className }) => {
  return (
    <ButtonElement className={className} onClick={onClick}>
      {title}
    </ButtonElement>
  );
};
