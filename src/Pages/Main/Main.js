import React, { Component } from "react";
import { SERVICE_LIST_API, CATEGORY_API } from "../../config";
import { withRouter } from "react-router-dom";

import Modal from "./Modal/Modal";
import Category from "./Category";
import Service from "./Service";

import "./Main.scss";

class Main extends Component {
  state = {
    category: [],
    serviceList: [],
    categoryName: [],
  };

  componentDidMount() {
    this.getCategoryList();
    this.getFirstServiceList();
  }

  getCategoryList = () => {
    fetch(CATEGORY_API)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          category: result.Category,
        });
      });
  };

  getFirstServiceList = () => {
    fetch(`${SERVICE_LIST_API}?catCd=1`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          serviceList: result.ServiceList,
          categoryName: result.CategoryName,
        });
      });
  };

  getServiceList = (categoryId) => {
    fetch(`${SERVICE_LIST_API}?catCd=${categoryId}`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          serviceList: result.ServiceList,
          categoryName: result.CategoryName,
        });
      });
  };

  goToRequest = (serviceId) => {
    this.props.history.push(`/request/${serviceId}`);
  };

  render() {
    const { category, serviceList, categoryName } = this.state;
    const { getServiceList, goToRequest } = this;

    return (
      <main className="Main">
        <header>
          <h1>{categoryName}</h1>
          <p>지금 최고와 함께 시작해보세요!</p>
          <div className="searchBar">
            <input
              type="text"
              placeholder="어떤 분야의 전문가를 찾으시나요?"
              className="search"
            />
            <button type="button">고수찾기</button>
          </div>
        </header>
        <Category category={category} getServiceList={getServiceList} />
        <Service serviceList={serviceList} goToRequest={goToRequest} />
        <Modal />
      </main>
    );
  }
}

export default withRouter(Main);
