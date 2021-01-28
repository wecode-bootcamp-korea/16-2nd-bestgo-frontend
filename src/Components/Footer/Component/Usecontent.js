import React, { Component } from "react";
import styled from "styled-components";

class Usecontent extends Component {
  render() {
    return (
      <Usecontainer>
        <Terms>
          <P>이용약관</P>
          <P>개인정보 취급방침</P>
        </Terms>
        <Spaned>
          (주) BestGo는 통신판매중개자로서 통신판매의 당사자가 아니며 개별
          판매자가 제공하는 서비스에 대한 이행, 계약사항 등과 관련한 의무와
          책임은 거래 당사자에게 있습니다.
        </Spaned>
        <Spaned>
          상호명:(주)BestGo · 대표이사:박영호 · 개인정보책임관리자:박영호 ·
          주소:서울특별시 강남구 테헤란로 (삼성동, 위워크타워)
          사업자등록번호:120-88-22325 · 통신판매업신고증:제 1111-서울강남-03247
          호 · 직업정보제공사업 신고번호:서울청 제 2222-33호 고객센터:1533-3333
          · 이메일: qkrdudgh052@soomgo.com Copyright ©Brave Mobile Inc. All
          Rights Reserved.
        </Spaned>
      </Usecontainer>
    );
  }
}

export default Usecontent;

const Usecontainer = styled.div`
  width: 75%;
`;

const Terms = styled.div`
  display: flex;
`;

const P = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #737373;

  &:nth-child(2) {
    margin-left: 40px;
  }
`;

const Spaned = styled.span`
  display: block;
  margin-top: 20px;
  font-size: 12px;
`;
