import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarWrapper, SidebtnWrap, SidebarRoute} from "./SidebarElements";

export const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to="resume" onClick={toggle}>Resume</SidebarLink>
        </SidebarMenu>
        <SidebtnWrap>
          <SidebarRoute to="contact">Contact</SidebarRoute>
        </SidebtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
