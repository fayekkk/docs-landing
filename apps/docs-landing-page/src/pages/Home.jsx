// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/sections/Hero';
import ApiInfrastructure from '../components/sections/ApiInfrastructure';
import Security from '../components/sections/Security';
import Resources from '../components/sections/Resources';
import Integration from '../components/sections/Integration';
import GettingStarted from '../components/sections/GettingStarted';

const Home = () => {
  return (
    <>
      <Hero />
      <section id="overview">
        {/* Replace with your ErpOverview component when ready */}
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2>ERP Overview Section (Coming Soon)</h2>
        </div>
      </section>
      <section id="infrastructure">
        <ApiInfrastructure />
      </section>
      <section id="security">
        <Security />
      </section>
      <section id="resources">
        <Resources />
      </section>
      <section id="integration">
        <Integration />
      </section>
      <section id="getting-started">
        <GettingStarted />
      </section>
    </>
  );
};

export default Home;