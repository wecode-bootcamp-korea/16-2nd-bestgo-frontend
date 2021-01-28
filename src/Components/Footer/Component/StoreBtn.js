import React, { Component } from "react";
import styled from "styled-components";
import { BUTTON_ICON } from "./Data";

class FooterBtn extends Component {
  render() {
    return (
      <>
        {BUTTON_ICON.map((itme) => {
          return (
            <Button>
              <i className={itme.icon} />
              <span>{itme.name}</span>
            </Button>
          );
        })}
      </>
    );
  }
}

export default FooterBtn;

const Button = styled.button`
  width: 146px;
  height: 44px;
  padding: 0 16px;
  margin: 25px 8px 0 0;
  background-color: #00c7ae;
  border-radius: 50px;

  .icon {
    margin-right: 10px;
    font-size: 14px;
    color: #fff;
  }

  span {
    font-size: 12px;
    color: #fff;
  }
`;
