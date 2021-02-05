import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Title, Main } from "../Login/Login";
import { FindCardLayout, FindNotice } from "./FindPassword";
import { ReactComponent as MailSVG } from "./mail.svg";

function Send() {
  const emailValue = useLocation().state.inputFindEmail;
  return (
    <>
      <Main>
        <Title>비밀번호 찾기</Title>
        <SendCardLayout>
          <MailSVG />
          <FindNotice>
            {emailValue}
            <span>
              으로 <br /> 비밀번호 재설정 링크가 발송되었어요
            </span>
          </FindNotice>
          <FindNotice>
            <small>
              5분내로 최고로 부터 메일을 받지 못하셨다면
              <br /> 스팸 폴더를 확인해주세요.
            </small>
          </FindNotice>
        </SendCardLayout>
      </Main>
    </>
  );
}

export default Send;

export const SendCardLayout = styled(FindCardLayout)`
  text-align: center;
  height: 312px;

  ${FindNotice} {
    font-size: 1rem;
    font-weight: 600;
    color: #00c7ae;
    margin-bottom: 24px;

    span {
      font-size: 0.9rem;
      font-weight: 600;
      color: #323232;
    }

    small {
      display: inline;
      font-size: 0.84rem;
      font-weight: 400;
      color: #999;
    }
  }
`;
