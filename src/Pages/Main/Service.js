import React, { Component } from "react";

class Service extends Component {
  render() {
    const { serviceList, goToRequest } = this.props;

    return (
      <section className="Service">
        <h2>인기 레슨</h2>
        <div className="cardArea">
          {serviceList.length &&
            serviceList.map((serviceList) => {
              return (
                <button
                  className="cardBox"
                  key={serviceList.serviceId}
                  onClick={() => goToRequest(serviceList.serviceId)}
                >
                  <img src={serviceList.imageUrl} alt="lesson" />
                  <label>{serviceList.name}</label>
                </button>
              );
            })}
        </div>
      </section>
    );
  }
}

export default Service;
