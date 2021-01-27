import React from "react";
import styled from "styled-components";
import { ReactComponent as FacebookLogo } from "./icon-login-facebook-btn.svg";
import { ReactComponent as KakaoLogo } from "./icon-login-kakaotalk-btn.svg";

function Buttons({ emailClick, kakaoClick }) {
  return (
    <>
      <ButtonStyled default onClick={emailClick}>
        <span>이메일 로그인</span>
      </ButtonStyled>
      <ButtonStyled KakaoBtn onClick={kakaoClick}>
        <KakaoLogo />
        <span>Kakao로 시작하기</span>
      </ButtonStyled>
      <ButtonStyled FacebookBtn>
        <FacebookLogo />
        <span>Facebook으로 시작하기</span>
      </ButtonStyled>
    </>
  );
}

export default Buttons;

export const Button = styled.button`
  width: 100%;
  color: #fff;
  background-color: #00c7ae;
  text-align: center;
  font-weight: 500;
  border-radius: 5px;
  margin-bottom: 0.75rem;
  padding: 12px;

  span {
    font-size: 16px;
    font-weight: 400;
    margin-left: 0.5rem;
  }

  svg {
    vertical-align: bottom;
  }
`;

export const ButtonStyled = styled(Button)`
  background-color: ${(props) => {
    if (props.FacebookBtn) return "#1876f1";
    if (props.KakaoBtn) return "#fee500";
    return;
  }};
  color: ${(props) => props.KakaoBtn && "#000"};
`;
