import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCode } from 'react-icons/di';
import { SocialIconsContainer } from '../Footer/FooterStyles';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCode size="3rem" /> <span>Full Stack Developer</span>
        </a>
      </Link>
    </Div1>
    <Div2>
    <li>
        <Link href="#certificates">
          <NavLink>Certificates</NavLink>
        </Link>
      </li>      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
    <Div3>
      <SocialIconsContainer>
        <SocialIcons href="https://github.com/edualvesrj">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/edualvesrj/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
      </Div3>
    </Container>
);

export default Header;
