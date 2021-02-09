import React, { Component } from "react";
import styled from "styled-components";
import FooterInfo from "./Component/FooterInfo";
import FooterCont from "./Component/FooterCont";
import IconList from "./Component/IconList";
import Usecontent from "./Component/Usecontent";

class Footer extends Component {
  render() {
    return (
      <Footers>
        <FooterContainer>
          <InfoContainer>
            <FooterCont />
            <FooterInfo />
          </InfoContainer>
          <ExplanContainer>
            <Usecontent />
            <IconList />
          </ExplanContainer>
        </FooterContainer>
      </Footers>
    );
  }
}

export default Footer;

const Footers = styled.footer`
  width: 100%;
  height: 350px;
  margin-top: 30px;
  border-top: 1px solid #f2f2f2;
  font-family: "Noto Sans KR", sans-serif;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 970px;
  height: 100%;
  margin: 0 auto;
  background-color: #fff;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ExplanContainer = styled(InfoContainer)`
  margin-top: 30px;
`;
