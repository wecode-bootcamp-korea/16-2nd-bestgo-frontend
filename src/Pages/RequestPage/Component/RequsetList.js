import React, { Component, Fragment } from "react";
import styled from "styled-components";

class RequsetList extends Component {
  state = {
    requestList: [],
  };

  componentDidMount() {
    fetch("Data/userData.json")
      .then((res) => res.json())
      .then((requestList) => this.setState({ requestList }));
  }

  render() {
    const { requestList } = this.state;

    return (
      <RequestListed>
        {!!requestList &&
          requestList.map((item, index) => {
            return (
              <RequsetContainer key={index}>
                <UserContainer>
                  <img src={item.userimg} alt="유저이미지" />
                  <Description>
                    <P>{item.userName}</P>
                    <Span>{item.category}</Span>
                    <Span>{item.address}</Span>
                    <Spandes>
                      {item.description.length > 58
                        ? item.description.slice(0, 58) + "..."
                        : item.description}
                    </Spandes>
                  </Description>
                  <Information>
                    <Span>{item.time}</Span>
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

export default RequsetList;

const RequestListed = styled.div`
  margin: 30px auto;
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
