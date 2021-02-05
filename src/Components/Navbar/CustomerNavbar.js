import React from "react";
import styled from "styled-components";
import { customerLinks } from "./NavbarMenu/NavbarMenu";
import { Ul, Content, LinkStyled } from "./Navbar";
import MagnifyingGlassSrc from "../../images/MagnifyingGlass.svg";
import BellSrc from "../../images/bell.svg";
import ProfileSrc from "../../images/profile.svg";

function CustomerNavbar() {
  return (
    <>
      <CustomerMenu>
        {customerLinks.map((link, idx) => {
          return (
            <Content key={idx}>
              <LinkStyled to={link.to}>{link.name}</LinkStyled>
            </Content>
          );
        })}
        <MagnifyingGlass src={MagnifyingGlassSrc} alt="MagnifyingGlass__IMG" />
        <ServiceSearch placeholder="서비스를 검색해보세요" />
      </CustomerMenu>
      <CustomerProfile>
        <Bell src={BellSrc} alt="Bell__IMG" />
        <Profile src={ProfileSrc} alt="Profile__IMG" />
        <CustomerName>최고 고객님</CustomerName>
      </CustomerProfile>
    </>
  );
}

export default CustomerNavbar;

export const CustomerMenu = styled(Ul)`
  justify-content: flex-start;
  padding-left: 1rem;
`;

export const CustomerProfile = styled(Ul)``;

export const MagnifyingGlass = styled.img`
  height: 20px;
  margin: 1.5rem 0 0;
  position: relative;
  left: 1rem;
`;

export const Bell = styled.img`
  height: 20px;
  margin: 1.5rem 0 0;
  padding-right: 2rem;
`;

export const ServiceSearch = styled.input`
  border-bottom: 1px solid #000;
  margin-top: 1.8rem;
  padding: 11px 24px;
  width: 194px;
  height: 30px;

  &::placeholder {
    font-size: 0.9rem;
    font-weight: 600;
    opacity: 0.5;
  }
  & {
    padding: 0 0 0.8rem 1.5rem;
    font-size: 1rem;
    color: #737373;
  }
`;

export const Profile = styled.img`
  height: 40px;
  border-radius: 50%;
  margin: 1rem 0 0;
`;

export const CustomerName = styled.p`
  font-size: 1rem;
  margin: 1.5rem;
  color: #323232;
`;
