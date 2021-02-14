import React, { useState } from "react";
import styled from "styled-components";
import { customerLinks, dropdownItems } from "./NavbarMenu/NavbarMenu";
import { Ul, Content, LinkStyled } from "./Navbar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownDivider,
} from "styled-dropdown-component";

import MagnifyingGlassSrc from "../../images/MagnifyingGlass.svg";
import BellSrc from "../../images/bell.svg";
import ProfileSrc from "../../images/profile.svg";

function CustomerNavbar() {
  const [hidden, setHidden] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.replace("/");
  };

  const expertChange = () => {
    const token = window.localStorage.getItem("token");
    localStorage.removeItem("token");
    localStorage.setItem("master_token", token);
    window.location.replace("/");
  };

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
        <Dropdown>
          <CustomerName onClick={() => setHidden(!hidden)}>
            최고 고객님
          </CustomerName>
          <CustomerDropdownMenu
            hidden={hidden}
            toggle={() => setHidden(!hidden)}
          >
            {dropdownItems.map((link, idx) => {
              return (
                <LinkStyled to={link.to} key={idx}>
                  <DropdownItem>{link.name}</DropdownItem>
                </LinkStyled>
              );
            })}
            <DropdownDivider />
            <DropdownItem onClick={expertChange}>고수전환</DropdownItem>
            <DropdownItem onClick={handleLogout}>로그아웃</DropdownItem>
          </CustomerDropdownMenu>
        </Dropdown>
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
  cursor: pointer;
`;

export const CustomerDropdownMenu = styled(DropdownMenu)`
  margin: 0 0 0 -1.5rem;

  ${DropdownItem} {
    cursor: pointer;
  }
`;
