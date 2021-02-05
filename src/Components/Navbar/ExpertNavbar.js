import React from "react";
import styled from "styled-components";
import { expertLinks } from "./NavbarMenu/NavbarMenu";
import {
  Bell,
  Profile,
  CustomerName,
  CustomerProfile,
  CustomerMenu,
} from "./CustomerNavbar";
import { LinkStyled, Content } from "./Navbar";
import BellSrc from "../../images/bell.svg";
import ProfileSrc from "../../images/profile.svg";

function ExpertNavbar() {
  return (
    <>
      <ExpertMenu>
        {expertLinks.map((link, idx) => {
          return (
            <Content key={idx}>
              <LinkStyled to={link.to}>{link.name}</LinkStyled>
            </Content>
          );
        })}
      </ExpertMenu>
      <ExpertProfile>
        <Bell src={BellSrc} alt="Bell__IMG" />
        <Profile src={ProfileSrc} alt="Profile__IMG" />
        <CustomerName>최고 고객님</CustomerName>
      </ExpertProfile>
    </>
  );
}

export default ExpertNavbar;

export const ExpertMenu = styled(CustomerMenu)``;
export const ExpertProfile = styled(CustomerProfile)``;
