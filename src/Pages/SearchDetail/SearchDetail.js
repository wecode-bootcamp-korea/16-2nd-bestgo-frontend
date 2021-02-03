import React, { Component } from "react";
import GosuInfo from "./Components/GosuInfo";
import styled from "styled-components";
import Footer from "../../Components/Footer/Footer";

class SearchDetail extends Component {
  render() {
    return (
      <>
        <SearchDetails>
          <GosuInfo />
        </SearchDetails>
      </>
    );
  }
}
export default SearchDetail;

const SearchDetails = styled.div`
  width: 1000px;
  margin: 50px auto;
`;
