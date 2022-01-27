import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './CertificatesStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { certificates } from '../../constants/constants';
import "react-responsive-carousel/lib/styles/carousel.min.css";
var Carousel = require('react-responsive-carousel').Carousel;

function Certificates() {
  return (
    <Section nopadding id="certificates">
      <SectionDivider />
      <SectionTitle main>My Certificates</SectionTitle>
      {/* <GridContainer> */}
        <Carousel autoPlay={true} showThumbs={true} stopOnHover={true} dynamicHeight={true} centerMode={true}
          centerSlidePercentage={80} showArrows={true} transitionTime={500} interval={2000} 
          thumbWidth={100} selectedItem={0} infiniteLoop={true}> 
          {certificates.map((p, i) => {
            return (
              <div>
                <Img src={p.item} />
                <p className="legend">{p.title}</p>
              </div>
            );
          })}
        </Carousel>
      {/* </GridContainer> */}
    </Section>
  );
}

export default Certificates;