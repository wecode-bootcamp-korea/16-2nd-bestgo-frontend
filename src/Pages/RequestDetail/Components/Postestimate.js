import React, { Component } from "react";
import styled from "styled-components";
import { SERVER_POST } from "../../../config";
import { withRouter } from "react-router-dom";

class Postestimate extends Component {
  state = {
    name: "",
    value: "",
  };

  inputHandle = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({ value });
  };

  postQuotation = (e) => {
    const id = this.props.location.state.id;
    const { name, value } = this.state;

    fetch(`${SERVER_POST}=${id}`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        price: name,
        pricingMethod: value,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.MESSAGE === "QUOTATION_SENT") {
          alert("견적서 요청 성공!");
        }
      });
  };

  render() {
    return (
      <Postestimated>
        <PostestimatedContainer>
          <Estimated>
            <Htag>견적금액</Htag>
            <Span>이용안내</Span>
          </Estimated>
          <select className="selectBox" onChange={this.handleChange}>
            <option value="총 비용">총 비용</option>
            <option value="시간당">시간 당</option>
          </select>
          <Money>
            <Input
              name="name"
              dir="rtl"
              placeholder="0"
              type="text"
              maxLength="9"
              onChange={this.inputHandle}
            />
            <span>원</span>
          </Money>
          <Description>
            <P>경쟁력 있는 프로필이 중요합니다.</P>
            <Span>
              입력하신 견적금액은 고수님의 프로필과 함께 고객에게 메시지로
              전달됩니다.
            </Span>
          </Description>
          <Button onClick={this.postQuotation}>견적 보내기</Button>
        </PostestimatedContainer>
      </Postestimated>
    );
  }
}

export default withRouter(Postestimate);

const Postestimated = styled.div`
  position: fixed;
  max-width: 1500px;
  left: 40%;
  top: 20%;
`;

const PostestimatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;

  .selectBox {
    width: 176px;
    height: 48px;
    padding: 11px 32px 11px 16px;
    margin-top: 35px;
    border-radius: 5px;
    outline: none;
    font-size: 20px;
  }
`;

const Estimated = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Htag = styled.h1`
  font-size: 34px;
  font-weight: bold;
  color: #323232;
`;

const Description = styled.div`
  margin-top: 50px;
`;

const P = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #00c7ae;
`;

const Span = styled.span`
  font-size: 14px;
  color: #737373;
`;

const Money = styled.div`
  width: 285px;
  height: 70px;
  border-bottom: 1px solid #000;

  span {
    position: relative;
    font-size: 30px;
    color: #737373;
  }

  &:hover {
    border-bottom: 1px solid #00c7ae;
  }
`;

const Input = styled.input`
  width: 240px;
  height: 75px;
  padding: 15px;
  font-size: 35px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &::placeholder {
    text-align: right;
  }
`;

const Button = styled.button`
  width: 600px;
  height: 65px;
  margin-top: 60px;
  background-color: #00c7ae;
  font-size: 30px;
  color: #fff;
  border-radius: 5px;
`;
