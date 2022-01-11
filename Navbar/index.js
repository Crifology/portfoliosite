import React, {useState, useEffect} from "react";
import {CgMenu} from 'react-icons/cg';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';

export const Navbar = ({toggle}) => {

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>Crifo</NavLogo>
        <MobileIcon onClick={toggle}>
            <CgMenu />
        </MobileIcon>
        <NavMenu>
            <NavItem>
                <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='resume' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Resume</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
            </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/contact">Contact Me</NavBtnLink>
        </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};