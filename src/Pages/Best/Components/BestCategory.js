import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Frame from "../Components/Frame/Frame";
import { BEST_SIGNUP, BEST_SIGNUP_QUESTION } from "../../../config";

import {
  StepInfo,
  StepSubInfo,
  ListGroupItem,
  Checkbox,
  List,
  NextButton,
  PrevButton,
} from "../Best";

function BestCategory(props) {
  const [bestQuestionData, setBestQuestionData] = useState("");
  const [bestCategoryData, setBestCategoryData] = useState("");

  const nextSelectValue = useLocation().state.checkedValue;
  const nextQuestionValue = useLocation().state.value;

  const history = useHistory();

  const getBestQuestion = useCallback(() => {
    return axios.get(`${BEST_SIGNUP_QUESTION}/${nextQuestionValue}`);
  }, [nextQuestionValue]);

  const getBestCategory = useCallback(() => {
    return axios.get(BEST_SIGNUP + `?category=[${nextSelectValue}]`);
  }, [nextSelectValue]);

  useEffect(() => {
    axios
      .all([getBestCategory(), getBestQuestion()])
      .then(
        axios.spread((bestResp, bestQuestionResp) => {
          setBestCategoryData(bestResp.data);
          setBestQuestionData(bestQuestionResp.data);
        }),
      )
      .catch((err) => {
        alert(err);
      });
  }, [getBestCategory, getBestQuestion]);

  const nextButton = () => {
    history.push({
      pathname: "/services/regions",
    });
  };

  return (
    <>
      <StepInfo>{bestQuestionData.question}</StepInfo>
      <StepSubInfo>{bestQuestionData.sub_question}</StepSubInfo>
      {bestCategoryData.services &&
        bestCategoryData.services.map((list, idx) => {
          return (
            <Frame key={idx}>
              <ListGroupItem>
                <Checkbox
                  id={idx}
                  name={idx}
                  type="checkbox"
                  value={bestCategoryData.services[idx].id}
                />
                <List>{list.name}</List>
              </ListGroupItem>
            </Frame>
          );
        })}

      <NextButton default onClick={nextButton}>
        <span>다음</span>
      </NextButton>
      <PrevButton>
        <span>이전</span>
      </PrevButton>
    </>
  );
}

export default BestCategory;
