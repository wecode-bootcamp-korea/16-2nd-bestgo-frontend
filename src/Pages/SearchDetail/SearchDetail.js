import React, { Component } from "react";
import GosuInfo from "./Components/GosuInfo";
import styled from "styled-components";
import Footer from "../../Components/Footer/Footer";

class SearchDetail extends Component {
  // state = {
  //   test: [],
  // };

  // componentDidMount() {
  //   fetch(`http://10.58.3.12:8000/users/profile/${this.props.match.params.id}`)
  //     .then((res) => res.json())
  //     .then((result) => this.setState({ test: result }));
  // }

  render() {
    return (
      <>
        <SearchDetails>
          <GosuInfo />
        </SearchDetails>
        <Footer />
      </>
    );
  }
}
export default SearchDetail;

const SearchDetails = styled.div`
  width: 1000px;
  margin: 50px auto;
`;
