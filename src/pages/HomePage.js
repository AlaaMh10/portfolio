import { Fragment } from 'react';

import Header from '../components/HomePage/Header';
import About from '../components/HomePage/About';
import Skills from '../components/HomePage/Skills';
import Projects from '../components/HomePage/Projects';
import Footer from '../components/HomePage/Footer';
import Contact from '../components/HomePage/contact';
import Bg from '../components/HomePage/bg';

const HomePage = () => {
  return (

    <Fragment>
      <Header/>
      <About />
      <Skills/>
      <Projects />
      <Contact/>
      <Footer />
      <Bg />


    </Fragment>
  );
};

export default HomePage;
