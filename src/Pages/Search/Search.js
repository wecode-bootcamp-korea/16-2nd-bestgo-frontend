import React, { Component } from "react";
import styled from "styled-components";
import FilterBtn from "./Components/FilterBtn";
import GosuList from "./Components/GosuList";

class Search extends Component {
  render() {
    return (
      <Searched>
        <Htag>고수 찾기</Htag>
        <H2>숨고 - 지역, 카테고리</H2>
        <FilterBtn />
        <GosuList />
      </Searched>
    );
  }
}

export default Search;

const Searched = styled.div`
  width: 1100px;
  margin: 50px auto;
`;

const Htag = styled.h1`
  font-size: 34px;
  font-weight: bold;
`;

const H2 = styled.h2`
  margin-top: 15px;
  font-size: 14px;
  color: #737373;
`;
