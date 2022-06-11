import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const ButtonElement = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid transparent;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primaryColor};
  transition: ${({ theme }) => theme.midTransition};

  &:hover {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.primaryColor};
    border: 1px solid ${({ theme }) => theme.primaryColor};

    img {
      filter: invert(0.5) sepia(1) saturate(5) hue-rotate(340deg);
    }
  }
`;

const ImageContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;

  img {
    transition: ${({ theme }) => theme.midTransition};
  }
`;

export const Button: React.FC<{
  title: string;
  onClick?: () => void;
  iconPath?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}> = ({ title, className, iconPath, onClick, type = 'button' }) => {
  return (
    <ButtonElement type={type} className={className} onClick={onClick}>
      {iconPath && (
        <ImageContainer>
          <Image src={iconPath} alt={title} />
        </ImageContainer>
      )}
      {title}
    </ButtonElement>
  );
};
