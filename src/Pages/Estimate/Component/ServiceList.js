import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ServiceList extends Component {
  state = {
    serviceList: [],
  };

  componentDidMount() {
    fetch("./Data/serviceList.json")
      .then((res) => res.json())
      .then((result) => this.setState({ serviceList: result }));
  }

  render() {
    const { serviceList } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 4,
    };

    return (
      <>
        <Slider {...settings}>
          {serviceList.map((item) => {
            return (
              <>
                <img src={item.img} alt="서비스 이미지" />
                <span>{item.name}</span>
              </>
            );
          })}
        </Slider>
      </>
    );
  }
}

export default ServiceList;
