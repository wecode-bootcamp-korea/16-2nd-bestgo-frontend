import React, { Component, Fragment } from "react";
import styled from "styled-components";
import SendEstimated from "./Component/SendEstimate";
import ServiceList from "./Component/ServiceList";

class Estimate extends Component {
  render() {
    return (
      <Estimated>
        <Htag>받은견적</Htag>
        <EstimateContainer>
          <EstimateBox>
            <SendEstimated />
          </EstimateBox>
          <Slider>
            <Hservice>추천 서비스</Hservice>
            <ServiceList />
          </Slider>
        </EstimateContainer>
      </Estimated>
    );
  }
}

export default Estimate;

const Estimated = styled.div`
  width: 1100px;
  height: 100vh;
  margin: 0 auto;
  margin-top: 50px;
`;

const EstimateContainer = styled.div``;

const Slider = styled.div`
  width: 100%;
  margin: 60px 25px;

  img {
    width: 250px;
    height: 180px;
    border-radius: 5px;
  }
`;

const EstimateBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 20px;
`;

const Htag = styled.h1`
  margin-left: 20px;
  font-size: 34px;
  font-weight: bold;
`;

const Hservice = styled(Htag)`
  margin-left: 0;
  margin-bottom: 30px;
`;
