import React, { Component, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { SERVER } from "../../../config";
import PageBtn from "../Components/PageBtn";
import styled from "styled-components";

const LIMIT = 20;

class GosuList extends Component {
  state = {
    data: [],
    currentIdx: 1,
  };

  componentDidMount() {
    fetch(`http://10.58.0.86:8000/users/profile?limit=${LIMIT}`)
      .then((res) => res.json())
      .then((result) => this.setState({ data: result.masterList }));
  }

  fetchPage = (e) => {
    const offset = e?.target.dataset.idx;

    fetch(
      `http://10.58.0.86:8000/users/profile?limit=${LIMIT}&offset=${
        offset * LIMIT
      }`,
    )
      .then((res) => res.json())
      .then((result) => this.setState({ data: result.masterList }));
  };

  goDetailPage = () => {
    this.props.history.push(`/search/detail/${this.props.id}`);
  };

  filterHandle = (e) => {
    const filter = e?.target.value;
    fetch(`${SERVER}/users/profile?sorted_by=${filter}`)
      .then((res) => res.json())
      .then((result) => this.setState({ data: result.masterList }));
  };

  render() {
    const { data, currentIdx } = this.state;

    return (
      <GosuLists>
        <select onChange={this.filterHandle}>
          <option>최신순</option>
          <option value="-avg">평점순</option>
          <option value="-cnt">리뷰순</option>
        </select>
        {data.masters?.map((item, index) => {
          return (
            <GosuListContainer key={index}>
              <GosuProfile>
                <img src={item.profileImg} alt="고수프로필이미지" />
              </GosuProfile>
              <GosuInfo onClick={this.goDetailPage}>
                <P>{item.name}</P>
                <Span>{item.introduction}</Span>
                <StarContainer>
                  <Spand>{item.rating}</Spand>
                  <StarBox>
                    <BackgroundStar />
                    <Star style={{ width: item.rating * 18 }} />
                  </StarBox>
                </StarContainer>
                <ReviewContainer>
                  <Spand>{item.reviewCount}</Spand>
                  <Span>{item.review}</Span>
                </ReviewContainer>
              </GosuInfo>
            </GosuListContainer>
          );
        })}
        <PageBtn currentIdx={currentIdx} fetchPage={this.fetchPage} />
      </GosuLists>
    );
  }
}

export default withRouter(GosuList);

const GosuLists = styled.div`
  margin: 50px auto;

  select {
    float: right;
    width: 100px;
    height: 30px;
    border: none;
    outline: none;
  }
`;

const GosuListContainer = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
  margin-top: 20px;
`;

const GosuProfile = styled.div`
  img {
    width: 120px;
    height: 120px;
    border-radius: 5px;
  }
`;

const StarContainer = styled.div`
  display: flex;
`;

const GosuInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
  margin-left: 20px;
  cursor: pointer;
`;

const StarBox = styled.div`
  position: relative;
  display: flex;
  width: 90px;
`;

const BackgroundStar = styled.div`
  position: absolute;
  background-image: url("/Images/starblack.png");
  width: 100%;
  height: 17px;
  opacity: 85%;
`;

const Star = styled.div`
  background-image: url("/Images/star.png");
  height: 18px;
`;

const ReviewContainer = styled.div`
  display: flex;
`;

const P = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #737373;
`;

const Span = styled.span`
  margin-right: 10px;
  font-size: 16px;
  font-weight: normal;
  color: #737373;
`;

const Spand = styled(Span)`
  color: #00c7ae;
  font-weight: bold;
`;
