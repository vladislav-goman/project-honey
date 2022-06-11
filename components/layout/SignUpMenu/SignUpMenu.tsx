import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { TextInput } from '../../common/TextInput';
import { Button } from '../../common/Button';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ButtonMargin = styled(Button)`
  margin-top: 2.5rem;
`;

interface Values {
  email: string;
  password: string;
}

export const SignUpMenu: React.FC = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
      verifyPassword: '',
    },
    onSubmit: (values: Values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        name="email"
        label="Email"
        type="email"
        onChange={handleChange}
        value={values.email}
      />

      <TextInput
        name="password"
        label="Пароль"
        type="password"
        onChange={handleChange}
        value={values.password}
      />

      <TextInput
        name="verifyPassword"
        label="Повторите пароль"
        type="password"
        onChange={handleChange}
        value={values.verifyPassword}
      />

      <ButtonMargin title="Зарегистрироваться" type="submit" />
    </Form>
  );
};
