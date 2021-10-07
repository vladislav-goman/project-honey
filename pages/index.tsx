import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;
const Home: React.FC = () => {
  return <Title>My page</Title>;
};

export default Home;
