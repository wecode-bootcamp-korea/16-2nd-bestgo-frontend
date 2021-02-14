import React, { Component } from "react";
import styled from "styled-components";
import GosuList from "./Components/GosuList";

class EstimateDetail extends Component {
  render() {
    return (
      <EstimateDetails>
        <GosuList />
      </EstimateDetails>
    );
  }
}

export default EstimateDetail;

const EstimateDetails = styled.div`
  width: 100%;
`;
