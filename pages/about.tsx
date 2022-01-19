import React, { FC } from 'react';
import Layout from '../components/Layout';

export const About: FC = () => {
  return (
    <Layout
      customMeta={{
        title: 'About - Hunter Chang',
      }}
    >
      <h1>About Page</h1>
      <p>Welcome to the about page</p>
    </Layout>
  );
};

export default About;
