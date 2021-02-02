import React, { Component } from "react";
import Postestimate from "./Components/Postestimate";
import UserList from "./Components/UserList";
import styled from "styled-components";

class RequestDetail extends Component {
  render() {
    return (
      <RequestDetails>
        <UserList />
        <Postestimate />
      </RequestDetails>
    );
  }
}

export default RequestDetail;

const RequestDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  margin-top: 80px;
`;
