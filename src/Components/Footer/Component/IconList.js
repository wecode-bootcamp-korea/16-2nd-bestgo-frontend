import React, { Component } from "react";
import styled from "styled-components";
import { ICON } from "./Data";

class IconList extends Component {
  render() {
    return (
      <IconLists>
        {ICON.map((item, index) => {
          return (
            <Iconbox key={index}>
              <i className={item.icon} />
            </Iconbox>
          );
        })}
      </IconLists>
    );
  }
}

export default IconList;

const IconLists = styled.div`
  display: flex;
  margin-top: 30px;

  .icon {
    font-size: 17px;
    color: #fff;
  }
`;

const Iconbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  margin-left: 23px;
  border-radius: 50%;
  background-color: gray;
`;
