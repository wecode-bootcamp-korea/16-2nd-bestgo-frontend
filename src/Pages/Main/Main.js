import React, { Component } from "react";
import {
  SERVICE_LIST_API,
  CATEGORY_API,
  SERVICE_SEARCH_API,
} from "../../config";
import { withRouter } from "react-router-dom";

import SearchingModal from "./Modal/SearchingModal";
import Category from "./Category";
import Service from "./Service";

import "./Main.scss";

class Main extends Component {
  state = {
    category: [],
    serviceList: [],
    categoryName: [],
    modal: false,
    searchContent: [],
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
    fetch(`${SERVICE_LIST_API}?catCd=17`)
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

  handleOpenModal = () => {
    this.setState({
      modal: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      modal: false,
    });
  };

  handleSearch = (e) => {
    this.setState({
      searchContent: e.target.value,
    });
  };

  render() {
    const {
      category,
      serviceList,
      categoryName,
      modal,
      searchContent,
    } = this.state;
    const {
      getServiceList,
      goToRequest,
      handleOpenModal,
      handleCloseModal,
      handleSearch,
    } = this;

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
              onChange={handleSearch}
            />
            <button type="button" onClick={handleOpenModal}>
              고수찾기
            </button>
          </div>
        </header>
        <Category category={category} getServiceList={getServiceList} />
        <Service serviceList={serviceList} goToRequest={goToRequest} />
        {modal && (
          <SearchingModal
            onClose={handleCloseModal}
            searchContent={searchContent}
          />
        )}
      </main>
    );
  }
}

export default withRouter(Main);
