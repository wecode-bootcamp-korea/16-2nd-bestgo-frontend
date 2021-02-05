import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Title, Main } from "../Login/Login";
import { FindCardLayout } from "./FindPassword";
import { FormTitle, InvalidInfo, FormGroup } from "../Login/Login";
import { InputStyled } from "../Login/Components/Input/EmailPasswordInput";
import { ButtonStyled } from "../Login/Components/Button/Buttons";
import { FINDPW_RESET_MSG } from "./data/VelidationMsg";
import { FIND_SEND } from "../../config";

function Reset(props) {
  const [inputResetPassword, setInputResetPassword] = useState({
    resetPassword: "",
    resetRePassword: "",
  });

  const [resetPwHasValue, setResetPwHasValue] = useState(false);
  const [resetRePwHasValue, setResetRePwHasValue] = useState(false);
  const [checkValid, setCheckValid] = useState("");
  const [reCheckValid, setReCheckValid] = useState("");
  const { resetPassword, resetRePassword } = inputResetPassword;
  const history = useHistory();

  const handlePasswordValue = (e) => {
    const { name, value } = e.target;
    setInputResetPassword({
      ...inputResetPassword,
      [name]: value,
    });
  };

  const validationCheck = (e) => {
    e.preventDefault();
    const { resetPassword, resetRePassword } = inputResetPassword;

    const isValidPwReg = /^.*(?=.{8,})(?=.*[0-9])(?=.*[a-zA-Z]).*$/.test(
      resetPassword,
      resetRePassword,
    );

    setResetPwHasValue(!isValidPwReg);
    setResetRePwHasValue(!isValidPwReg);

    !resetPassword
      ? setCheckValid("resetPwValueInfo")
      : setCheckValid("resetInvalidInfo");

    !resetRePassword
      ? setReCheckValid("resetRePwInfo")
      : setReCheckValid("resetRePwMatchInfo");

    if (!!isValidPwReg) setCheckValid("default");

    if (resetPassword === resetRePassword && resetPassword)
      setReCheckValid("default");

    if (!!isValidPwReg && resetPassword === resetRePassword) {
      patchResetAxios();
    }
  };

  const patchResetAxios = () => {
    axios
      .patch(FIND_SEND, {
        password: inputResetPassword,
        token: props.match.params.token,
      })
      .then((res) => {
        alert("비밀번호가 변경되었습니다.");
        history.push("/");
      })
      .catch((err) => {
        const { MESSAGE } = err.response.data;
        if (MESSAGE) alert("비밀번호가 일치하지 않습니다.");
      });
  };

  return (
    <>
      <Main>
        <Title>비밀번호 재설정</Title>
        <ResetCardLayout>
          <FormGroup>
            <FormTitle>새로운 비밀번호</FormTitle>
            <FormResetInput
              name="resetPassword"
              type="password"
              value={resetPassword}
              placeholder="영문+숫자 조합 8자리 이상 입력해주세요"
              invalidOnClick={resetPwHasValue}
              onChange={handlePasswordValue}
            />
            <InvalidInfo>{FINDPW_RESET_MSG[checkValid]}</InvalidInfo>
          </FormGroup>

          <FormGroup>
            <FormTitle>새로운 비밀번호 확인</FormTitle>
            <FormResetInput
              name="resetRePassword"
              type="password"
              value={resetRePassword}
              placeholder="비밀번호를 한번 더 입력해주세요"
              invalidOnClick={resetRePwHasValue}
              onChange={handlePasswordValue}
            />
            <InvalidInfo>{FINDPW_RESET_MSG[reCheckValid]}</InvalidInfo>
          </FormGroup>

          <ButtonStyled default onClick={validationCheck}>
            <span>비밀번호 재설정 완료</span>
          </ButtonStyled>
        </ResetCardLayout>
      </Main>
    </>
  );
}

export default Reset;

export const ResetCardLayout = styled(FindCardLayout)`
  height: 350px;
`;
export const FormResetInput = styled(InputStyled)`
  ::placeholder {
    font-size: 0.9rem;
    font-weight: 500;
  }
`;
