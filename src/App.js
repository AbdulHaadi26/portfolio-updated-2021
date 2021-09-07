import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Intro from './components/intro';
import Portfolio from './components/portfolio';
import WorkProcess from './components/work_process';
import Skills from './components/skills';
import Container from './containers';
import Footer from './components/footer';
import Clients from './components/clients';
import Contact from './components/contact';
import { useRef, useState } from 'react';
import SideNav from './components/sidenav';

function App() {

  const aboutRef = useRef({}), workRef = useRef({}), contactRef = useRef({}), [nav, setNav] = useState(false);

  return (
    <Container>
      <Home aboutRef={aboutRef} workRef={workRef} contactRef={contactRef} setNav={setNav} />
      <Intro innerRef={aboutRef} />
      <Skills />
      <WorkProcess innerRef={workRef} />
      <Portfolio />
      <Clients innerRef={contactRef} />
      <Contact />
      <Footer />
      <SideNav nav={nav} aboutRef={aboutRef} workRef={workRef} contactRef={contactRef} setNav={setNav} />
    </Container>
  );

}

export default App;
