import React, { Component } from "react";

import {
  SERVICE_DETAIL_API,
  SERVICE_QUESTIONS_API,
  SERVICE_REGIONS_API,
} from "../../config";

import Form from "./Form/Form";
import Aside from "./Aside";

import "./Request.scss";

class Request extends Component {
  state = {
    categoryInfo: [],
    questions: [],
    reviews: [],
    regions: [],
  };

  componentDidMount = () => {
    this.getInfo();
  };

  getInfo = () => {
    fetch(
      `${SERVICE_DETAIL_API}serviceId=${this.props.match.params.serviceId}`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      },
    )
      .then((response) => response.json())
      .then((result) => this.setState({ categoryInfo: result.DETAIL }));
    fetch(SERVICE_QUESTIONS_API)
      .then((response) => response.json())
      .then((result) => this.setState({ questions: result.QUESTIONS }));
    fetch("/Data/Reviews.json")
      .then((response) => response.json())
      .then((result) => this.setState({ reviews: result.Reviews }));
    fetch(SERVICE_REGIONS_API)
      .then((response) => response.json())
      .then((result) => this.setState({ regions: result.Regions }));
  };

  render() {
    const { categoryInfo, questions, reviews, regions } = this.state;
    const starLength = categoryInfo.avgRating * 32;

    return (
      <div className="Request">
        <header>
          <div className="lessonHeader">
            <h1>{categoryInfo.name}</h1>
            <div className="pointBox">
              <span>{categoryInfo.avgRating}</span>
              <div className="starBox">
                <div className="blackstar"></div>
                <div className="star" style={{ width: starLength }}></div>
              </div>
            </div>

            <div className="totalWrapper">
              <div className="totalBox">
                <h4>{categoryInfo.activeMaster}</h4>
                <p>활동 고수</p>
              </div>
              <div className="totalBox">
                <h4>{categoryInfo.totalRequest}</h4>
                <p>누적 요청서</p>
              </div>
              <div className="totalBox">
                <h4>{categoryInfo.totalReview}</h4>
                <p>리뷰 수</p>
              </div>
            </div>
          </div>
        </header>
        <main>
          <section className="formArea">
            <Form
              questions={questions}
              reviews={categoryInfo.ratings}
              regions={regions}
            />
            <Aside />
          </section>
          <div className="reviewArea">
            <section className="reviewWrapper">
              <h3>생생한 고객님의 리뷰</h3>
              {reviews &&
                reviews.map((reviews) => {
                  return (
                    <div className="reviewBox" key={reviews.reviewsId}>
                      <div className="userBox">
                        <h4>{reviews.userName}</h4>
                        <span>{reviews.ratings}</span>
                      </div>
                      <p>{reviews.content}</p>
                    </div>
                  );
                })}
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default Request;
