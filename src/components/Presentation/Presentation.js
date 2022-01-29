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
        The purpose of this page is to demonstrate my portfolio, presenting my works and studies as a Full Stack Developer.<br/> <br/>
        This Portfolio is a laboratory for me to study the ReactJs library, as well as other technologies.
        It is always being updated, and I invite you to revisit to see what's new.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Presentation;