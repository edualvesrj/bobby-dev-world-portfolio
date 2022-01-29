import About from '../components/About/About';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Certificates from '../components/Certificates/Certificates';
import Presentation from '../components/Presentation/Presentation';
import Projects from '../components/Projects/Projects';
import Resume from '../components/Resume/Resume';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Presentation />
        <BgAnimation />
      </Section>
      <Certificates />
      <Projects />
      <Technologies />
      <About/>
      <Resume/>
    </Layout>
  );
};

export default Home;
