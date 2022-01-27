import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './CertificatesStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { certificates } from '../../constants/constants';

const Certificates = () => (
  <Section nopadding id="certificates">
    <SectionDivider />
    <SectionTitle main>Certificates</SectionTitle>
    <GridContainer>
      {certificates.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.item} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <UtilityList>
              <ExternalLinks href={p.link}>View</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Certificates;