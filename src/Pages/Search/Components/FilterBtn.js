import React, { Component } from "react";
import styled from "styled-components";
import { BUTTON_DATA } from "../Data/Data";

class FilterBtn extends Component {
  render() {
    return (
      <FilterBtns>
        {BUTTON_DATA.map((item) => {
          return (
            <Button>
              <i className={item.icon} />
              <span>{item.content}</span>
            </Button>
          );
        })}
      </FilterBtns>
    );
  }
}

export default FilterBtn;

const FilterBtns = styled.div`
  display: flex;
  margin-top: 30px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 220px;
  height: 45px;
  margin-right: 30px;
  background-color: #f2f2f2;
  border-radius: 5px;
  color: #737373;

  .icon {
    margin-left: 15px;
  }

  span {
    margin-left: 10px;
  }
`;
