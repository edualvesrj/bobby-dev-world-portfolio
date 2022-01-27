import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Certificates from '../components/Certificates/Certificates';
import Presentation from '../components/Presentation/Presentation';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
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
      {/* <Timeline />
      <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
