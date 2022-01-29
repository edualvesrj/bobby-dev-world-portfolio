import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Resume = () =>  (
  <Section id="resume">
    <SectionDivider divider />
    <SectionTitle>Resume</SectionTitle>
    <SectionText>
        To download my Resume, click on the image below...<br/>
        <a href="/images/EDUARDO_ALVES-RESUME.pdf" target="_blank" download><img src="/images/resume.png"/></a>
    </SectionText>
    <SectionDivider colorAlt />
  </Section>
);

export default Resume;
