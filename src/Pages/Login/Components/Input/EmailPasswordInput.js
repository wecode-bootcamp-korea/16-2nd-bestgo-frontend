import React from "react";
import styled from "styled-components";

export default function EmailPasswordInput(props) {
  return <InputStyled {...props} autoComplete="off" />;
}

export const InputStyled = styled.input.attrs((props) => ({
  type: props.type === "email" ? "email" : "password",
}))`
  padding: 0.75rem;
  border-radius: 6px;
  background-color: #fff;
  border: ${({ invalidOnClick, invalidPwOnClick, invalidOnBlur }) => {
    const isInvalidOn = invalidOnClick || invalidPwOnClick || invalidOnBlur;
    if (isInvalidOn) return "1px solid #fa5963";
    return "1px solid  #e1e1e1";
  }};
  width: 100%;
  font-size: 16px;
  font-weight: 400;

  &:focus {
    ${({ invalidOnBlur, invalidOnClick, invalidPwOnClick }) =>
      invalidOnBlur || invalidOnClick || invalidPwOnClick
        ? `box-shadow: 0 0 6px #fa5963`
        : `box-shadow: 0 0 6px #00c7ae`}
  }

  &::placeholder {
    color: #bab5b3;
  }
`;
