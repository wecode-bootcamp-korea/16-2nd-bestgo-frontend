import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Card from "./Components/Card/Card";
import EmailPasswordInput from "./Components/Input/EmailPasswordInput";
import Buttons from "./Components/Button/Buttons";
import { KakaoSocialLogin } from "./Components/Social/KakaoSocialLogin";
import { Link } from "react-router-dom";
import { SIGNIN_API } from "../../config";

export default function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [onBlurHasValue, setOnBlurHasValue] = useState(false);
  const [buttonsEmailHasValue, setButtonsEmailHasValue] = useState(false);
  const [buttonsPwHasValue, setButtonsPwHasValue] = useState(false);

  const history = useHistory();

  const handleUpdateValue = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const setOnBlurCheckValue = (e) => {
    const isOnBlur = !email && !password;
    setOnBlurHasValue(isOnBlur);
  };

  const handleValidationCheck = (e) => {
    e.preventDefault();

    const isValidEmailReg = /\S+@\S+\.\S+/.test(email);
    const isValidPwReg = /^.*(?=.{8,})(?=.*[0-9])(?=.*[a-zA-Z]).*$/.test(
      password,
    );

    setButtonsEmailHasValue(!isValidEmailReg);
    setButtonsPwHasValue(!isValidPwReg);

    isValidEmailReg && isValidPwReg
      ? onEmailLogin()
      : alert("이메일 또는 비밀번호가 일치하지 않습니다.");
  };

  const onEmailLogin = () => {
    axios
      .post(SIGNIN_API, {
        email: inputs.email,
        password: inputs.password,
      })
      .then((res) => {
        alert("최고에 오신걸 환영합니다.");
        localStorage.setItem("token", res.data.TOKEN);
        history.push({
          pathname: "/",
          state: { email },
        });
        window.location.replace("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const { email, password } = inputs;
  const emailValueInfo = !email && buttonsEmailHasValue;
  const emailInvalidInfo = email && buttonsEmailHasValue;
  const passwordValueInfo = !password && buttonsPwHasValue;
  const passwordInvalidInfo = password && buttonsPwHasValue;

  return (
    <>
      <Main>
        <Title>로그인</Title>
        <Card>
          <FormGroup>
            <FormTitle>이메일</FormTitle>
            <EmailPasswordInput
              name="email"
              type="email"
              value={email}
              placeholder="example@soomgo.com"
              invalidOnClick={buttonsEmailHasValue}
              invalidOnBlur={onBlurHasValue}
              onChange={handleUpdateValue}
              onBlur={setOnBlurCheckValue}
            />
            {emailValueInfo && (
              <InvalidInfo>이메일 주소를 입력해주세요.</InvalidInfo>
            )}
            {emailInvalidInfo && (
              <InvalidInfo>올바른 이메일 주소를 입력해주세요.</InvalidInfo>
            )}
          </FormGroup>
          <FormTitle>비밀번호</FormTitle>
          <EmailPasswordInput
            name="password"
            type="password"
            value={password}
            placeholder="비밀번호를 입력해주세요"
            invalidPwOnClick={buttonsPwHasValue}
            invalidOnBlur={onBlurHasValue}
            onChange={handleUpdateValue}
            onBlur={setOnBlurCheckValue}
          />
          {passwordValueInfo && (
            <InvalidInfo>비밀번호를 입력해주세요.</InvalidInfo>
          )}
          {passwordInvalidInfo && (
            <InvalidInfo>영문+숫자 조합 8자리 이상 입력해주세요.</InvalidInfo>
          )}
          <StyledLink to="/find-password">비밀번호 찾기</StyledLink>
          <Buttons
            emailClick={handleValidationCheck}
            kakaoClick={KakaoSocialLogin}
          />
          <StyledLink to="/signup">계정이 없으신가요?</StyledLink>
        </Card>
      </Main>
    </>
  );
}

export const Main = styled.main`
  background-color: #fafafa;
  padding: 5rem 0;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 34px;
  font-weight: 600;
  margin-bottom: 2.5rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

export const FormTitle = styled.p`
  font-size: 1rem;
  padding-bottom: 0.375rem;
  font-weight: 500;
`;

export const InvalidInfo = styled.p`
  display: ${({ email }) => (email ? "none" : "display")};
  color: #fa5963;
  font-size: 80%;
  font-weight: 600;
  margin: 0.3rem 0px 0.7rem;
`;

export const StyledLink = styled(Link)`
  display: block;
  color: #737373;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: underline;

  &[href="/find-password"] {
    display: inline-block;
    margin: 0.5rem 0px 2.5rem 0px;
  }

  &[href="/signup"] {
    margin-top: 1rem;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
  }
`;
