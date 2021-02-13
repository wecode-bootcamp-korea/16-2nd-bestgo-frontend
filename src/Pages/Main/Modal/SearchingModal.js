import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { SERVICE_SEARCH_API } from "../../../config";

import "./SearchingModal.scss";

class SearchingModal extends Component {
  state = {
    gotSearchContent: [],
    allSearchContent: [],
  };

  componentDidMount = () => {
    this.getSearchContent();
  };

  getSearchContent = () => {
    fetch(`${SERVICE_SEARCH_API}keyword=${this.props.searchContent}`)
      .then((response) => response.json())
      .then((result) =>
        this.setState({
          gotSearchContent: result.keywords,
          allSearchContent: result.ServiceList,
        }),
      );
  };

  goTorequestPage = (serviceId) => {
    this.props.history.push(`/request/${serviceId}`);
  };

  render() {
    const { gotSearchContent, allSearchContent } = this.state;
    const { onClose, searchContent } = this.props;
    // console.log(gotSearchContent);
    return (
      <div className="SearchingModal">
        <div className="search">
          <div className="closeBox">
            <button className="close" onClick={onClose}>
              <img src="Images/cancel.png" alt="close" width="20px" />
            </button>
          </div>
          {gotSearchContent ? (
            <h2>{`"${searchContent}"에 관련된 레슨입니다.`}</h2>
          ) : (
            <h2>{`"${searchContent}"에 대한 검색 결과가 없습니다.`}</h2>
          )}

          <div className="serviceBtnArea">
            {gotSearchContent
              ? gotSearchContent.map((contents) => {
                  return (
                    <div className="serviceBtnBox">
                      <button
                        type="button"
                        className="serviceBtn"
                        onClick={() => this.goTorequestPage(contents.serviceId)}
                        key={contents.serviceId}
                      >
                        {contents.name}
                      </button>
                    </div>
                  );
                })
              : allSearchContent.map((contents) => {
                  return (
                    <div className="serviceBtnBox">
                      <button
                        type="button"
                        className="serviceBtn"
                        onClick={() => this.goTorequestPage(contents.serviceId)}
                        key={contents.serviceId}
                      >
                        {contents.name}
                      </button>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchingModal);
