import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { QUOTATIONLIST_POST } from "../../../config";
import styled from "styled-components";

class SendEstimated extends Component {
  state = {
    userEstimate: [],
  };

  componentDidMount() {
    fetch(`${QUOTATIONLIST_POST}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => this.setState({ userEstimate: result.allQuotations }));
  }

  render() {
    const { userEstimate } = this.state;

    return (
      <>
        {userEstimate.map((item, index) => {
          return (
            <Fragment key={index}>
              <Estimatebox>
                <Date>
                  <button>마감</button>
                  <span>{item.createdAt}</span>
                </Date>
                <span className="category">{item.service}</span>
                <Images>
                  {item.masterImage.map((item) => {
                    return (
                      <img src={item.masterImageUrl} alt="유저프로필이미지" />
                    );
                  })}
                </Images>
                <Button
                  onClick={() =>
                    this.props.history.push({
                      pathname: "/estimate/detail",
                      state: { id: item.requestId },
                    })
                  }
                >
                  자세히 보기
                </Button>
              </Estimatebox>
            </Fragment>
          );
        })}
      </>
    );
  }
}

export default withRouter(SendEstimated);

const Estimatebox = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 250px;
  margin-right: 10px;
  margin-top: 15px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 5px;

  .category {
    float: left;
    margin-left: 20px;
    font-size: 20px;
    font-weight: bold;
  }
`;

const Images = styled.div`
  display: flex;
  margin: 30px 0 0 20px;

  img {
    width: 44px;
    height: 44px;
    margin-right: 10px;
    border-radius: 5px;
  }
`;

const Button = styled.button`
  width: 310px;
  height: 55px;
  margin: 0 auto;
  margin-top: 30px;
  color: #fff;
  background-color: #00ceb1;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    background-color: #00a790;
  }
`;

const Date = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 15px auto;

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50px;
    height: 22px;
    font-size: 12px;
    font-weight: bold;
    border-radius: 5px;
    background-color: #f2f2f2;
  }
`;
