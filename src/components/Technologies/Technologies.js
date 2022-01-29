import React from 'react';
import { DiAngularSimple, DiDotnet, DiIntellij, DiJava, DiMsqlServer, DiMysql, DiNetbeans, DiPhp, DiPostgresql, DiReact, DiSublime, DiVisualstudio } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have been working with a wide range of technologies throughout my career.
      I'm very strong in back-end development, but I stay active on the front-end.
    </SectionText>
    <List>
    <ListItem>
        <picture>
          <DiPhp size="3rem" />
          <DiDotnet size="3rem"/>
          <DiJava size="3rem"/>
          <DiMsqlServer size="3rem" />
          <DiPostgresql size="3rem" />
          <DiMysql size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            .Net, PHP, Java, Oracle, MS Sql Server, Postgres, MySql...
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
          <DiAngularSimple size="3rem"/>
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Angular, AngularJs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiVisualstudio size="3rem" />
          <DiNetbeans size="3rem" />
          <DiIntellij size="3rem" />
          <DiSublime size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>IDEs</ListTitle>
          <ListParagraph>
            Experience with <br />
            Visual Studio, Visual Code, NetBeans, Intellij, Sublime...
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
