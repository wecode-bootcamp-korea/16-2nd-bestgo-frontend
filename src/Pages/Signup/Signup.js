import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import EmailPasswordInput from "../Login/Components/Input/EmailPasswordInput";
import { Link, useHistory } from "react-router-dom";
import { Main, Title, FormGroup, FormTitle, InvalidInfo } from "../Login/Login";
import { ReactComponent as FacebookLogo } from "../Login/Components/Button/icon-login-facebook-btn.svg";
import { ButtonStyled } from "../../Pages/Login/Components/Button/Buttons";
import { CardLayout } from "../Login/Components/Card/Card";
import { SIGNUP_MSG } from "./data/VelidationMsg";
import { SIGNUP_API } from "../../config";

export default function Signup() {
  const [inputSignupValue, setInputSignupValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [buttonsNameHasValue, setButtonsNameHasValue] = useState(false);
  const [buttonsEmailHasValue, setButtonsEmailHasValue] = useState(false);
  const [buttonsPwHasValue, setButtonsPwHasValue] = useState(false);

  const [nameCheckValid, setNameCheckValid] = useState("");
  const [emailCheckValid, setEmailCheckValid] = useState("");
  const [passwordCheckValid, setPasswordCheckValid] = useState("");

  const history = useHistory();

  const signupInputValue = (e) => {
    const { name, value } = e.target;
    setInputSignupValue({
      ...inputSignupValue,
      [name]: value,
    });
  };

  const signUpValidationCheck = (e) => {
    e.preventDefault();
    const { name, email, password } = inputSignupValue;

    const isValidNameReg = /^.*(?=.{2,}).*$/.test(name);
    const isValidEmailReg = /\S+@\S+\.\S+/.test(email);
    const isValidPwReg = /^.*(?=.{8,})(?=.*[0-9])(?=.*[a-zA-Z]).*$/.test(
      password,
    );

    setButtonsNameHasValue(!isValidNameReg);
    setButtonsEmailHasValue(!isValidEmailReg);
    setButtonsPwHasValue(!isValidPwReg);

    !name
      ? setNameCheckValid("nameInfo")
      : setNameCheckValid("nameInvalidInfo");

    !email
      ? setEmailCheckValid("emailInfo")
      : setEmailCheckValid("emailInvalidInfo");

    !password
      ? setPasswordCheckValid("pwInfo")
      : setPasswordCheckValid("pwInvalidInfo");

    if (!!isValidNameReg) setNameCheckValid("default");
    if (!!isValidEmailReg) setEmailCheckValid("default");
    if (!!isValidPwReg) setPasswordCheckValid("default");
    if (!!isValidNameReg && !!isValidEmailReg && !!isValidPwReg) signupAxios();
  };

  const signupAxios = () => {
    axios
      .post(SIGNUP_API, {
        name: inputSignupValue.name,
        email: inputSignupValue.email,
        password: inputSignupValue.password,
      })
      .then((res) => {
        alert("회원가입이 완료되었습니다 !");
        history.push("/login");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const { name, email, password } = inputSignupValue;

  return (
    <>
      <Main>
        <Title>최고에 오신 것을 환영합니다</Title>
        <SignupCard>
          <FormGroup>
            <FormTitle>생년월일</FormTitle>
            <EmailPasswordInput
              name="name"
              type="email"
              value={name}
              invalidOnClick={buttonsNameHasValue}
              placeholder="이름(실명)을 입력해주세요"
              onChange={signupInputValue}
            />
            <InvalidInfo>{SIGNUP_MSG[nameCheckValid]}</InvalidInfo>
          </FormGroup>
          <FormGroup>
            <FormTitle>이메일</FormTitle>
            <EmailPasswordInput
              name="email"
              type="email"
              value={email}
              invalidOnClick={buttonsEmailHasValue}
              placeholder="example@soomgo.com"
              onChange={signupInputValue}
            />
            <InvalidInfo>{SIGNUP_MSG[emailCheckValid]}</InvalidInfo>
          </FormGroup>
          <FormGroup>
            <FormTitle>비밀번호</FormTitle>
            <EmailPasswordInput
              name="password"
              type="password"
              value={password}
              invalidOnClick={buttonsPwHasValue}
              placeholder="영문+숫자 조합 8자리 이상 입력해주세요"
              onChange={signupInputValue}
            />
            <InvalidInfo>{SIGNUP_MSG[passwordCheckValid]}</InvalidInfo>
          </FormGroup>
          <TermInfo>
            유저의 허락없이 게시물을 올리지 않습니다. <br />
            숨고의 <LinkStyled to="/usage">이용약관</LinkStyled> 및
            <LinkStyled to="/privacy"> 개인정보취급방침</LinkStyled> 에
            동의합니다.
          </TermInfo>
          <ButtonStyled default onClick={signUpValidationCheck}>
            <span>회원가입</span>
          </ButtonStyled>
          <ButtonStyled FacebookBtn>
            <FacebookLogo />
            <span>Facebook으로 시작하기</span>
          </ButtonStyled>
          <LinkStyled to="/best">최고로 가입하시나요?</LinkStyled>
        </SignupCard>
      </Main>
    </>
  );
}

export const SignupCard = styled(CardLayout)`
  height: 637px;
`;

export const TermInfo = styled.p`
  color: #737373;
  font-size: 0.875rem;
  font-family: "Noto Sans KR", sans-serif;
  text-align: center;
  margin: -1rem 0 2.5rem 0;
`;

export const LinkStyled = styled(Link)`
  color: #00c7ae;
  &[href="/best"] {
    display: block;
    color: #737373;
    text-align: center;
    font-weight: 500;
    margin-top: 2rem;
  }
`;
