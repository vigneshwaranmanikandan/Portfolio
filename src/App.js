// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Mottos from './Mottos';
import Skills from './Skills';
import SlideInSection from './SlideInSection';
import Resume from './Resume';
import MoreAboutMe from './more-about-me'; 
import ProjectCarousel from './ProjectCarousel';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App bg-gray-100">
        <Header />
        <main className="overflow-hidden">
          <Routes>
            <Route path="/" element={
              <>
                <SlideInSection id="about" animation="slide-in-left">
                  <About />
                </SlideInSection>
                <SlideInSection id="skills" animation="slide-in-left">
                  <Skills />
                </SlideInSection>
                <SlideInSection id="projects" animation="slide-up">
                  <Projects />
                </SlideInSection>
                <SlideInSection id="contact" animation="slide-down">
                <ProjectCarousel />
                </SlideInSection>
                <SlideInSection id="mottos" animation="slide-in-right">
                  <Mottos />
                </SlideInSection>
                <SlideInSection id="contact" animation="slide-down">
                  <Contact />
                </SlideInSection>
              </>
            } />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/more-about-me" element={<MoreAboutMe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;