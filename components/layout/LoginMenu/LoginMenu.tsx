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

export const LoginMenu: React.FC = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values: Values) => {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(values, null, 2));
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

      <ButtonMargin title="Войти" type="submit" />
    </Form>
  );
};
