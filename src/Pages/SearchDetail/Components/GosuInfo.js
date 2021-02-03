import React, { Component } from "react";
import styled from "styled-components";
import { GOSU_INFORMATION } from "../Data/Data";

class GosuInfo extends Component {
  state = {
    gosuinfo: [],
  };

  componentDidMount() {
    fetch("http://10.58.4.216:8000/users/profile/21")
      .then((res) => res.json())
      .then((result) => this.setState({ gosuinfo: result.profile[0] }));
  }

  render() {
    const { gosuinfo } = this.state;
    console.log(gosuinfo[0]?.rating);

    return (
      <GosuInfos>
        <InfoContainer>
          <img src={gosuinfo.profileImg} alt="고수 프로필 이미지" />
          <GosuInformation>
            <P>{gosuinfo.name}</P>
            <Span>{gosuinfo.mainService}</Span>
            <StarBox>
              <BackgroundStar />
              <Star style={{ width: gosuinfo.rating * 18 }} />
            </StarBox>
          </GosuInformation>
        </InfoContainer>
        <FixedBox>
          <Span>{gosuinfo.name}고수에게 원하는 서비스의 견적을 받아보세요</Span>
          <button type="button">견적요청하기</button>
        </FixedBox>
        <IntroContainer>
          <H1>한줄소개</H1>
          <Span>{gosuinfo.introduction}</Span>
        </IntroContainer>
        <BasicInfo>
          <H1>기본정보</H1>
          {GOSU_INFORMATION.map((item, index) => {
            return (
              <label key={index}>
                <i className={item.icon} />
                <Span>{gosuinfo[item.content]}</Span>
              </label>
            );
          })}
        </BasicInfo>
        <ServiceContainer>
          <H1>제공서비스</H1>
          <Span>{gosuinfo.allService}</Span>
        </ServiceContainer>
        <DescriptionContainer>
          <H1>서비스 상세설명</H1>
          <Span>{gosuinfo.description}</Span>
        </DescriptionContainer>
      </GosuInfos>
    );
  }
}

export default GosuInfo;

const GosuInfos = styled.div`
  img {
    width: 120px;
    height: 120px;
    border-radius: 5px;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  width: 70%;
  div {
    margin-left: 30px;
  }
`;

const GosuInformation = styled.div``;

const StarBox = styled.div`
  position: relative;
  top: 40px;
  left: -60px;
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

const IntroContainer = styled.div`
  width: 700px;
  height: 150px;
  margin-top: 50px;
`;

const BasicInfo = styled.div`
  width: 700px;
  height: 200px;

  label {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  .icon {
    font-size: 18px;
    margin-right: 10px;
  }
`;

const ServiceContainer = styled.div`
  width: 700px;
  height: 150px;
  margin-top: 50px;
`;

const H1 = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const P = styled.p`
  font-size: 28px;
`;

const Span = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const DescriptionContainer = styled.div`
  width: 700px;
  height: 150px;
`;

const FixedBox = styled.div`
  position: fixed;
  left: 60%;
  top: 5%;
  width: 260px;
  height: 185px;
  padding: 20px;
  border: 1px solid #f2f2f2;

  button {
    width: 220px;
    height: 48px;
    margin-top: 55px;
    background-color: #00c7ae;
    border-radius: 5px;
    color: #fff;

    &:hover {
      background-color: #009481;
    }
  }
`;
