import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { Nav, Title, Main, FormTitle, InvalidInfo } from "../Login/Login";
import { CardLayout } from "../Login/Components/Card/Card";
import { InputStyled } from "../Login/Components/Input/EmailPasswordInput";
import { ButtonStyled } from "../Login/Components/Button/Buttons";

import { FIND_SEND } from "../../config";
import { FINDPW_VALIDATION_MSG } from "./data/VelidationMsg";

function FindPassword({ history }) {
  const [inputFindEmail, setInputFindEmail] = useState("");
  const [buttonsEmailHasValue, setButtonsEmailHasValue] = useState(false);
  const [checkValid, setCheckValid] = useState("");

  const handleEmailSend = (e) => {
    const { value } = e.target;
    setInputFindEmail(value);
  };

  const handleEmailCheck = (e) => {
    e.preventDefault();

    const emailValidation = /\S+@\S+\.\S+/.test(inputFindEmail);

    setButtonsEmailHasValue(!emailValidation);

    !inputFindEmail
      ? setCheckValid("findEmailValueInfo")
      : setCheckValid("findEmailInvalidInfo");

    if (emailValidation) {
      history.push({
        pathname: "/find-password/send",
        state: { inputFindEmail },
      });
    }

    axios.post(FIND_SEND, {
      email: inputFindEmail,
    });
  };

  return (
    <>
      <Nav />
      <Main>
        <Title>비밀번호 찾기</Title>
        <FindCardLayout>
          <FormTitle>가입한 이메일 주소를 입력해주세요</FormTitle>
          <InputStyled
            name="email"
            type="email"
            value={inputFindEmail}
            invalidOnClick={buttonsEmailHasValue}
            placeholder="example@soomgo.com"
            onChange={handleEmailSend}
          />
          <InvalidInfo>{FINDPW_VALIDATION_MSG[checkValid]}</InvalidInfo>
          <FindNotice>
            가입하신 이메일 주소를 입력해주시면 새로운 비밀번호를 설정 가능한
            링크를 보내드립니다.
          </FindNotice>
          <ButtonStyled default onClick={handleEmailCheck}>
            <span>이메일 전송하기</span>
          </ButtonStyled>
        </FindCardLayout>
      </Main>
    </>
  );
}

export default FindPassword;

export const FindCardLayout = styled(CardLayout)`
  height: 312px;

  ${FormTitle} {
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

export const FindNotice = styled.p`
  font-size: 0.83rem;
  font-weight: 500;
  color: #999;
  margin: 24px 0 40px;
`;
