import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Main, Title, FormGroup, FormTitle } from "../../Login/Login";
import { ButtonStyled } from "../../Login/Components/Button/Buttons";
import { CardLayout } from "../../Login/Components/Card/Card";
import EmailPasswordInput from "../../Login/Components/Input/EmailPasswordInput";
import { BEST_SIGNUP_TEMP_MASTER } from "../../../config";

function BestSignup() {
  const [inputSignupValue, setInputSignupValue] = useState({
    birthdate: "",
    phone_number: "",
  });

  const signupInputValue = (e) => {
    const { name, value } = e.target;
    setInputSignupValue({
      ...inputSignupValue,
      [name]: value,
    });
  };

  const handleBestSignup = () => {
    axios
      .get(BEST_SIGNUP_TEMP_MASTER)
      .then((res) => {
        alert("최고 가입을 완료하였습니다!");
        localStorage.setItem("master_token", res.data.master_token);
        window.location.replace("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <Main>
        <CardLayout>
          <Title>고수님 정보를 입력</Title>
          <FormGroup>
            <FormTitle>생년월일</FormTitle>
            <EmailPasswordInput
              name="birthdate"
              type="email"
              placeholder="생년월일을 입력해주세요"
              onChange={signupInputValue}
            />
          </FormGroup>
          <FormGroup>
            <FormTitle>휴대폰 번호 ( -를 빼고 입력해주세요 )</FormTitle>
            <EmailPasswordInput
              name="phone_number"
              type="email"
              placeholder="01012345678"
              onChange={signupInputValue}
            />
          </FormGroup>
          <ButtonStyled default onClick={handleBestSignup}>
            <span>회원가입</span>
          </ButtonStyled>
        </CardLayout>
      </Main>
    </>
  );
}

export default BestSignup;
