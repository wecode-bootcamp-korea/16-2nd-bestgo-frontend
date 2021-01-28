import React, { Component } from "react";
import styled from "styled-components";
import StoreBtn from "./StoreBtn";

class FooterCont extends Component {
  render() {
    return (
      <FooterConts>
        <Infor>
          <P>1599-5319</P>
          <Span>평일 10:00 - 18:00</Span>
          <Span>(점심시간 13:00 - 14:00 제외 · 주말/공휴일 제외)</Span>
        </Infor>
        <StoreBtn />
      </FooterConts>
    );
  }
}

export default FooterCont;

const FooterConts = styled.div`
  width: 350px;
  margin-top: 25px;
`;

const Infor = styled.div`
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #00c7ae;
`;

const Span = styled.span`
  margin-top: 7px;
  font-size: 14px;
  color: #737373;
`;
