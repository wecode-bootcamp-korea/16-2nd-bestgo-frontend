import React, { Component } from "react";
import styled from "styled-components";
import RequsetList from "./Component/RequsetList";
import Footer from "../../Components/Footer/Footer";

class RequestPage extends Component {
  render() {
    return (
      <>
        <RequestPaged>
          <Htag>받은요청</Htag>
          <RequsetList />
        </RequestPaged>
      </>
    );
  }
}

export default RequestPage;

const RequestPaged = styled.div`
  width: 1100px;
  height: 100%;
  margin: 30px auto;
`;

const Htag = styled.div`
  font-size: 34px;
  font-weight: bold;
  padding: 50px 0;
  margin-left: 30px;
`;
