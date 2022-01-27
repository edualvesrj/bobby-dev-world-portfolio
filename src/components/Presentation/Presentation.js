import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './PresentationStyles';

const Presentation = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Eduardo - aka 'Bobby' <br />
          Welcome to My Portfolio
        </SectionTitle>
        <SectionText>
        The purpose of this page is to demonstrate my portfolio, presenting my works and studies as a Full Stack Developer.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Presentation;