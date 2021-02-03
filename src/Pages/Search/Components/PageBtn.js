import React, { Component } from "react";
import styled from "styled-components";

class PageBtn extends Component {
  render() {
    const { fetchPage } = this.props;

    return (
      <PageBtns>
        <Button data-idx="0" onClick={fetchPage}>
          1
        </Button>
        <Button data-idx="1" onClick={fetchPage}>
          2
        </Button>
        <Button data-idx="2" onClick={fetchPage}>
          3
        </Button>
        <Button data-idx="3" onClick={fetchPage}>
          4
        </Button>
        <Button data-idx="4" onClick={fetchPage}>
          5
        </Button>
      </PageBtns>
    );
  }
}

export default PageBtn;

const PageBtns = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const Button = styled.button`
  margin-left: 15px;
  font-size: 20px;
`;
