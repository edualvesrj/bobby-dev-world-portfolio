import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const About = () =>  (
  <Section id="about">
    <SectionDivider divider />
    <SectionTitle>About Me</SectionTitle>
    <SectionText>
       Hello World! I'm Eduardo, aka Bobby. Let me introduce myself to you.<br/>
       I'm married, with a son, I love playing board games with friends, and riding my bike for long distances.<br/>
       In addition, I am a systems developer and passionate about new challenges. I always keep up to date with new technologies, and I like to challenge myself against new paradigms and discover how much can I achive.<br/>
       'Hello World!' It's definitely one of the first things many developers do when starting out in the software development world. This portfolio page is my 'Hello World!' in ReactJs.<br/>
       I hope you enjoy the result, and I wish you much success in everything you do.
    </SectionText>
    <SectionDivider colorAlt />
  </Section>
);

export default About;
