import React, { Component } from "react";
import styled from "styled-components";

class FooterInfo extends Component {
  state = {
    footerIntro: [],
  };

  componentDidMount() {
    fetch("/Data/Introduction.json")
      .then((res) => res.json())
      .then((result) => this.setState({ footerIntro: result.CATEGORY }));
  }

  render() {
    const { footerIntro } = this.state;

    return (
      <FooterInfos>
        {footerIntro.map((item, index) => {
          return (
            <Ul key={index}>
              {item.maincategory}
              <li>
                <ul>
                  {item.subcategory.map((item) => {
                    return (
                      <>
                        <li>{item}</li>
                      </>
                    );
                  })}
                </ul>
              </li>
            </Ul>
          );
        })}
      </FooterInfos>
    );
  }
}

export default FooterInfo;

const FooterInfos = styled.div`
  display: flex;
  margin-top: 7px;
`;

const Ul = styled.ul`
  padding: 8px 12px;
  margin-left: 12px;
  font-weight: bold;

  li {
    margin-top: 10px;
    font-weight: normal;
  }

  &:nth-child(3) {
    margin-left: -12px;
  }
`;
