import React from "react";
import styled from "styled-components";
import { links } from "./NavbarMenu/NavbarMenu";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <Ul>
      {links.map((link, idx) => {
        return (
          <Content key={idx}>
            <LinkStyled to={link.to}>{link.name}</LinkStyled>
          </Content>
        );
      })}
    </Ul>
  );
}

export default Navbar;

export const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 1rem;
  font-family: "Noto Sans KR", sans-serif;
`;

export const Content = styled.li`
  font-size: 16px;
  font-weight: 400;
  margin: 1.5rem;
`;

export const LinkStyled = styled(Link)`
  color: #000;
`;
