import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Frame from "./Components/Frame/Frame";
import { useHistory } from "react-router-dom";
import { BEST_SIGNUP, BEST_SIGNUP_QUESTION } from "../../config";
import { Button } from "../Login/Components/Button/Buttons";

function Best(props) {
  const [bestQuestionData, setBestQuestionData] = useState("");
  const [bestSignData, setBestSignData] = useState("");
  const [checkedValue, setCheckedValue] = useState([]);
  const [nextValue, setNextValue] = useState(1);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const getBestQuestion = useCallback(() => {
    return axios.get(`${BEST_SIGNUP_QUESTION}/${nextValue}`);
  }, [nextValue]);

  const getBestSignup = () => {
    return axios.get(BEST_SIGNUP);
  };

  const nextAxiosData = (e, value) => {
    checkboxOnChange(e);
    setNextValue(Number(value++));
    history.push({
      pathname: "/best/category",
      state: { checkedValue, value },
    });
  };

  const checkboxOnChange = (e) => {
    const { value } = e.target;
    setCheckedValue([...checkedValue, Number(value)]);
  };

  useEffect(() => {
    axios
      .all([getBestSignup(), getBestQuestion()])
      .then(
        axios.spread((bestResp, bestQuestionResp) => {
          setBestSignData(bestResp.data);
          setBestQuestionData(bestQuestionResp.data);
        }),
      )
      .catch((err) => {
        alert(err);
      });
    return () => setLoading(loading);
  }, [getBestQuestion, loading]);

  return (
    <>
      <StepInfo>{bestQuestionData.question}</StepInfo>
      <StepSubInfo>{bestQuestionData.sub_question}</StepSubInfo>
      {bestSignData.services &&
        bestSignData.services.map((list, idx) => {
          return (
            <Frame key={idx}>
              <ListGroupItem>
                <Checkbox
                  id={idx}
                  name={idx}
                  type="checkbox"
                  value={bestSignData.services[idx].id}
                  onChange={(e) => checkboxOnChange(e)}
                />
                <List>{list.name}</List>
              </ListGroupItem>
            </Frame>
          );
        })}

      <NextButton default onClick={(e) => nextAxiosData(e, nextValue)}>
        <span>다음</span>
      </NextButton>
      <PrevButton>
        <span>이전</span>
      </PrevButton>
    </>
  );
}

export default Best;

export const Nav = styled.nav`
  background-color: #000;
  text-align: center;
  height: 72px;
`;

export const Progress = styled.div`
  text-align: center;
  margin: 40px 50px;
`;

export const StepInfo = styled.h1`
  text-align: center;
  margin: 40px 50px;
  font-size: 24px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  color: #4d4d4d;
`;

export const StepSubInfo = styled.p`
  text-align: center;
  margin: 40px 50px;
  font-size: 14px;
  font-family: "Noto Sans KR", sans-serif;
  color: #323232;
`;

export const ListGroupItem = styled.div`
  text-align: left;
  position: relative;
  bottom: 10px;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 2%;
  padding: 10px 10px;

  &::after {
    color: #fff;
  }
`;

export const List = styled.small`
  color: #4d4d4d;
  font-size: 1rem;
  font-family: "Noto Sans KR";
  vertical-align: top;
`;

export const NextButton = styled(Button)`
  max-width: 5rem;
  margin: 1.3rem;
  position: relative;
  left: 61%;
  font-family: "Noto Sans KR";

  &::after {
    content: " >";
    font-weight: bold;
  }
`;

export const PrevButton = styled(NextButton)`
  background-color: #fff;
  color: #909090;
  font-family: "Noto Sans KR";
  left: 24%;
  padding: 11px;

  &::after {
    content: "";
  }

  &::before {
    content: "< ";
    font-weight: bold;
  }

  &:hover {
    border: 1px solid #999;
  }
`;

export const Select = styled.select`
  max-width: 5rem;
`;

export const Option = styled.option`
  max-width: 5rem;
`;
