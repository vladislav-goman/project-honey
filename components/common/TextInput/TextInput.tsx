import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 350px;
  margin-bottom: 15px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const InputElement = styled.input`
  padding: 10px 15px 12px;
  width: 100%;
  max-width: 350px;
  border-radius: 4px;
  font-size: 20px;
  border: 1px solid ${({ theme }) => theme.silverChalice};
`;

const LabelElement = styled.label`
  display: block;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const TextInput: React.FC<{
  label?: string;
  value?: string;
  name?: string;
  onChange?: any;
  className?: string;
  type?: 'email' | 'password' | 'number' | 'text';
}> = ({ label, onChange, className, value, name, type = 'text' }) => {
  return (
    <InputContainer>
      <LabelElement htmlFor={name}>{label}:</LabelElement>

      <InputElement
        id={name}
        name={name}
        type={type}
        className={className}
        onChange={onChange}
        value={value}
      />
    </InputContainer>
  );
};
