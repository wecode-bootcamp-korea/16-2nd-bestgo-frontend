import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { SERVER_DETAIL } from "../../../config";

class UserList extends Component {
  state = {
    userlist: [],
  };

  componentDidMount() {
    const id = this.props.location.state.id;
    fetch(`${SERVER_DETAIL}=${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => this.setState({ userlist: result.requestDetail }));
  }

  render() {
    const { userlist } = this.state;
    console.log(userlist[0]?.requester);
    return (
      <UserLists>
        <UserListContainer>
          <img src={userlist[0]?.requesterImage} alt="유저 프로필이미지" />
          <UserInfo>
            <P>{userlist[0]?.requester}</P>
            <Span>{userlist[0]?.service}</Span>
            <Span>{userlist[0]?.region}</Span>
          </UserInfo>
        </UserListContainer>
        <Spand>
          받은견적 <p>{userlist[0]?.receivedQuotations}개</p>
        </Spand>
        <Question>
          {userlist.map((item, index) => {
            return (
              <label key={index}>
                <Span>{item.question}</Span>
                <Spans>{item.choice}</Spans>
              </label>
            );
          })}
        </Question>
      </UserLists>
    );
  }
}

export default withRouter(UserList);

const UserLists = styled.div`
  padding: 40px;
  width: 400px;
  border-right: 1px solid #000;
`;

const UserListContainer = styled.div`
  display: flex;
  margin-bottom: 30px;

  img {
    width: 88px;
    height: 88px;
    border-radius: 5px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  margin-left: 15px;
`;

const Question = styled.div`
  width: 335px;

  label {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }
`;

const P = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const Span = styled.span`
  margin-top: 5px;
  font-size: 14px;
`;

const Spand = styled(Span)`
  display: flex;
  font-size: 16px;

  p {
    margin-left: 10px;
    color: #00c7ae;
  }
`;

const Spans = styled(Span)`
  font-size: 16px;
  font-weight: bold;
`;
