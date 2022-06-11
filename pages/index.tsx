import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { WelcomeSection } from '../components/sections/WelcomeSection';

const Home: React.FC = () => {
  return (
    <PageLayout>
      <WelcomeSection />
    </PageLayout>
  );
};

export default Home;
