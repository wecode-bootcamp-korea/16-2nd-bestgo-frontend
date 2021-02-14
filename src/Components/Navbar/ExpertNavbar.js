import React, { useState } from "react";
import styled from "styled-components";
import { expertLinks } from "./NavbarMenu/NavbarMenu";
import {
  Bell,
  Profile,
  CustomerName,
  CustomerProfile,
  CustomerMenu,
} from "./CustomerNavbar";
import { bestDropdownItems } from "./NavbarMenu/NavbarMenu";
import {
  Dropdown,
  DropdownItem,
  DropdownDivider,
} from "styled-dropdown-component";
import { CustomerDropdownMenu } from "./CustomerNavbar";
import { LinkStyled, Content } from "./Navbar";
import BellSrc from "../../images/bell.svg";
import ProfileSrc from "../../images/profile.svg";

function ExpertNavbar() {
  const [hidden, setHidden] = useState(true);

  const changeCustomer = () => {
    const master_token = window.localStorage.getItem("master_token");
    localStorage.removeItem("master_token");
    localStorage.setItem("token", master_token);
    window.location.replace("/");
  };

  const handleMasterLogout = () => {
    localStorage.removeItem("master_token");
    window.location.replace("/");
  };

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
        <Dropdown>
          <CustomerName onClick={() => setHidden(!hidden)}>
            최고 고객님
          </CustomerName>
          <CustomerDropdownMenu
            hidden={hidden}
            toggle={() => setHidden(!hidden)}
          >
            {bestDropdownItems.map((link, idx) => {
              return (
                <LinkStyled to={link.to}>
                  <DropdownItem>{link.name}</DropdownItem>
                </LinkStyled>
              );
            })}
            <DropdownDivider />
            <DropdownItem onClick={changeCustomer}>고객으로 전환</DropdownItem>
            <DropdownItem onClick={handleMasterLogout}>로그아웃</DropdownItem>
          </CustomerDropdownMenu>
        </Dropdown>
      </ExpertProfile>
    </>
  );
}

export default ExpertNavbar;

export const ExpertMenu = styled(CustomerMenu)``;
export const ExpertProfile = styled(CustomerProfile)``;
export const ExpertDropdownMenu = styled(CustomerDropdownMenu)``;
