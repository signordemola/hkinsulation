import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Quotes from '../components/Quotes';
import Experts from '../components/Experts';
import Contact from '../components/Contact';
import Certifications from '../components/Certifications';
import Customers from '../components/Customers';
import Today from '../components/Today';
import OurCustomer from '../components/OurCustomer';
import Overview from '../components/Overview';

const Home = () => {
  return (
    <section>
      <Hero />
      <Services />
      <Quotes />
      <Projects />
      <Experts />
      <Contact />
      <Certifications />
      <Customers />
      <Overview />
      <Today />
      <OurCustomer />
    </section>
  );
};

export default Home;
