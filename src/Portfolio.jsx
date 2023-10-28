import React, { useState, useEffect } from 'react';

import { Loader, Hero, About, Projects, Statistics, Footer, Blogs } from 'sections';
import { NavigationBar } from 'components';

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      <Loader style={isLoading ? {} : { opacity: 0, visibility: 'hidden' }} />
      <NavigationBar />
      <main>
        <Hero />
        <Projects />
        <Blogs />
        <About />
        <Statistics />

      </main>
      <Footer />
    </>
  );
}

// <Contact /> 