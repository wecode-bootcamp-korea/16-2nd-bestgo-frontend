import React, { Component } from "react";
import styled from "styled-components";
import RequsetList from "./Component/RequsetList";

class RequestPage extends Component {
  render() {
    return (
      <RequestPaged>
        <Htag>받은요청</Htag>
        <RequsetList />
      </RequestPaged>
    );
  }
}

export default RequestPage;

const RequestPaged = styled.div`
  width: 1100px;
  height: 100vh;
  margin: 0 auto;
  margin-top: 80px;
`;

const Htag = styled.div`
  font-size: 34px;
  font-weight: bold;
  padding: 50px 0;
  margin-left: 30px;
`;
