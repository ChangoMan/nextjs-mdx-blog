import React, { FC } from 'react';
import Layout from '../components/Layout';

export const About: FC = () => {
  return (
    <Layout
      customMeta={{
        title: 'Studio - MonoPlus',
      }}
    >
      <h1>Studio Page</h1>
      <p>Welcome to the about page</p>
    </Layout>
  );
};

export default About;
