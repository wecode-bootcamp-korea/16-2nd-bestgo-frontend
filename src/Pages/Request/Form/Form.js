import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { SERVICE_SUBMIT_API, MACHING_API } from "../../../config";

class Form extends Component {
  state = {
    step: 0,
    checkedContents: [],
    idx: 0,
    subIdx: 0,
    requestId: [],
  };

  prevStep = () => {
    if (this.state.step === 0) return;
    this.setState({
      step: this.state.step - 1,
    });
  };

  nextStep = () => {
    if (this.state.step === this.props.questions.length) return;
    if (!this.state.checkedContents[this.state.step])
      return alert("항목을 선택해주세요!");
    this.setState({
      step: this.state.step + 1,
    });
  };

  submit = () => {
    const { checkedContents, idx, subIdx } = this.state;
    const { regions } = this.props;
    fetch(
      `${SERVICE_SUBMIT_API}serviceId=${this.props.match.params.serviceId}`,
      {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
        },

        body: JSON.stringify({
          region: regions[idx].subregions[subIdx],
          choices: checkedContents,
        }),
      },
    )
      .then((response) => response.json())
      .then((result) =>
        this.setState({ requestId: result.requestId }, this.Matchting),
      );

    alert("요청서가 전달되었습니다!");
  };

  Matchting = () => {
    fetch(
      `${MACHING_API}serviceId=${this.props.match.params.serviceId}&requestId=${this.state.requestId}`,
      {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      },
    ).then((response) => console.log(response));
    this.props.history.push("/");
  };

  handleRadio = (e) => {
    const { checkedContents, step } = this.state;
    this.setState({
      checkedContents: [
        ...checkedContents.slice(0, step),
        e.target.value,
        ...checkedContents.slice(step + 1),
      ],
    });
  };

  handleIdx = (e) => {
    this.setState({ idx: e.target.value });
  };

  handleSubIdx = (e) => {
    this.setState({ subIdx: e.target.value });
  };

  render() {
    const { questions, regions } = this.props;
    const { step, checkedContents, idx } = this.state;
    const currentQuestion = questions[step];

    return (
      <form className="Form">
        <div className="percentBar" style={{ width: step * 80 }}></div>
        <p>
          {step === questions.length && checkedContents[step]
            ? 100
            : Math.round((step / questions.length) * 100)}
          %
        </p>
        <h4>{currentQuestion?.question}</h4>
        {step !== questions.length ? (
          <div className="questionWrapper">
            {currentQuestion?.choices.map((content) => {
              return (
                <>
                  {currentQuestion && (
                    <div className="questionBox" key={content}>
                      <input
                        type="radio"
                        onChange={this.handleRadio}
                        name={currentQuestion.question}
                        value={content}
                        checked={checkedContents[step] === content}
                      />
                      <label>{content}</label>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        ) : (
          <div className="questionWrapper">
            <div className="regionsBox">
              <label>시/도</label>
              <select onChange={(e) => this.handleIdx(e)}>
                {regions.map((content, idx) => {
                  return <option value={idx}>{content.name}</option>;
                })}
              </select>
            </div>
            <div className="regionsBox">
              <label>구</label>
              <select onChange={(e) => this.handleSubIdx(e)}>
                {regions[idx]?.subregions.map((content, subidx) => {
                  return <option value={subidx}>{content}</option>;
                })}
              </select>
            </div>
          </div>
        )}

        <div className="btnBox">
          <button type="button" className="Btn" onClick={this.prevStep}>
            이전
          </button>
          {step !== questions.length ? (
            <button type="button" className="green Btn" onClick={this.nextStep}>
              다음
            </button>
          ) : (
            <button type="button" className="green Btn" onClick={this.submit}>
              제출하기
            </button>
          )}
        </div>
      </form>
    );
  }
}

export default withRouter(Form);
