import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { SERVER_SERVICE } from "../../../config";
import styled from "styled-components";

class RequsetList extends Component {
  state = {
    requestList: [],
  };

  componentDidMount() {
    fetch(`${SERVER_SERVICE}`, {
      headers: {
        Authorization: localStorage.getItem("master_token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({ requestList: result.receivedRequests });
      });
  }

  render() {
    const { requestList } = this.state;

    return (
      <RequestListed onClick={this.goDetailPage}>
        {requestList?.map((item, index) => {
          return (
            <RequsetContainer
              key={index}
              onClick={() =>
                this.props.history.push({
                  pathname: "/requestpage/detail",
                  state: { id: item.requestId },
                })
              }
            >
              <UserContainer>
                <img src={item.requesterImage} alt="유저이미지" />
                <Description>
                  <P>{item.requester}</P>
                  <Span>{item.service}</Span>
                  <Span>{item.region}</Span>
                  <Spandes>
                    {item.choices.length > 58
                      ? item.choices.slice(0, 58) + "..."
                      : item.choices}
                  </Spandes>
                </Description>
                <Information>
                  <Span>{item.timeAgo}</Span>
                  <button type="button">삭제</button>
                </Information>
              </UserContainer>
            </RequsetContainer>
          );
        })}
      </RequestListed>
    );
  }
}

export default withRouter(RequsetList);

const RequestListed = styled.div`
  margin: 0 auto;
  cursor: pointer;
`;

const RequsetContainer = styled.div`
  width: 90%;
  height: 150px;
  margin: 0 0 30px 40px;
  border-bottom: 1px solid #f2f2f2;

  img {
    width: 130px;
    height: 130px;
    border-radius: 5px;
  }
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 690px;
  margin-left: 5px;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  margin-top: 10px;

  span {
    margin-top: -10px;
    font-size: 15px;
    color: #b5b5b5;
  }

  button {
    width: 55px;
    height: 27px;
    padding: 2px 12px;
    background-color: #fff;
    border: 1px solid #b5b5b5;
    border-radius: 5px;
    color: #b5b5b5;
    cursor: pointer;
  }
`;

const P = styled.p`
  font-size: 30px;
`;

const Span = styled.span`
  font-size: 18px;
`;

const Spandes = styled(Span)`
  color: #b5b5b5;
  font-size: 15px;
  margin-top: 5px;
`;
