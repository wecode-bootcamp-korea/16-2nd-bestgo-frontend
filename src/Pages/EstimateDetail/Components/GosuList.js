import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { DETAIL_QUOTATIONLIST } from "../../../config";

class GosuList extends Component {
  state = {
    gosudata: [],
  };

  componentDidMount() {
    const id = this.props.location.state.id;

    fetch(`${DETAIL_QUOTATIONLIST}=${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => this.setState({ gosudata: result }));
  }

  render() {
    const { gosudata } = this.state;

    return (
      <GosuLists>
        <ServiceCont>
          <img src={gosudata.REQUEST_DETAIL?.serviceImage} />
          <ServiceName>
            <span>{gosudata.REQUEST_DETAIL?.serviceName}</span>
          </ServiceName>
        </ServiceCont>
        {gosudata.RECEIVED_QUOTATION?.map((item, index) => {
          return (
            <GosuListCotainer key={index}>
              <img src={item.masterImageUrl} alt="고수 프로필이미지" />
              <GosuProfile>
                <Span>{item.masterName}</Span>
                <StarBox>
                  <BackgroundStar />
                  <Star style={{ width: item.avgRating * 18 }} />
                </StarBox>
                <Span>총 {item.price}</Span>
              </GosuProfile>
              <Employed>
                <Button type="button">고용하기</Button>
                <Span>{item.total_hired} 회 고용</Span>
              </Employed>
            </GosuListCotainer>
          );
        })}
      </GosuLists>
    );
  }
}

export default withRouter(GosuList);

const GosuLists = styled.div`
  margin: 30px auto;

  img {
    width: 100%;
    height: 300px;
  }

  span {
    position: relative;
  }
`;

const GosuListCotainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  height: 150px;
  margin: 30px auto;

  img {
    width: 130px;
    height: 130px;
    border-radius: 5px;
  }
`;

const ServiceCont = styled.div`
  position: relative;
  z-index: 2;
`;

const ServiceName = styled.div`
  position: absolute;
  top: -1px;
  width: 100%;
  height: 300px;
  background-color: #000;
  opacity: 0.5;
  z-index: 3;

  span {
    position: absolute;
    top: 55px;
    left: 24%;
    font-size: 50px;
    color: #fff;
  }
`;

const GosuProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const StarBox = styled.div`
  position: relative;
  top: 30px;
  width: 90px;
`;

const BackgroundStar = styled.div`
  position: absolute;
  background-image: url("/Images/starblack.png");
  width: 100%;
  height: 18px;
  opacity: 85%;
`;

const Star = styled.div`
  background-image: url("/Images/star.png");
  height: 18px;
`;

const Span = styled.span`
  font-size: 18px;
  font-weight: bold;

  &:nth-child(2) {
    color: #00c7ae;
  }

  &:nth-child(3) {
    margin-top: 55px;
  }
`;

const Employed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  margin-top: 10px;
`;

const Button = styled.div`
  width: 90px;
  height: 32px;
  padding: 3px 11px;
  background-color: #fff;
  border: 1px solid #b5b5b5;
  border-radius: 5px;
  color: #b5b5b5;
  cursor: pointer;
`;
