import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function MainNavbarLayout({ children }) {
  return (
    <NavbarLayout>
      <MainNavbarGroup>
        <Link to="/">
          <BestgoLogo
            src="https://project-bestgo.s3.ap-northeast-2.amazonaws.com/logo_image/bestgo.png"
            alt="BESTGO--LOGO"
          />
        </Link>
        {children}
      </MainNavbarGroup>
    </NavbarLayout>
  );
}

export default MainNavbarLayout;

export const BestgoLogo = styled.img`
  height: 36px;
  margin: 1.2rem 0 0 2rem;
`;

export const NavbarLayout = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid #e1e1e1;
  height: 72px;
`;

export const MainNavbarGroup = styled.div`
  display: flex;
`;
