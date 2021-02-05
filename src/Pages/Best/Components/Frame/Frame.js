import React from "react";
import styled from "styled-components";

function Frame({ children }) {
  return <BestFrame>{children}</BestFrame>;
}

export default Frame;

export const BestFrame = styled.section`
  width: 600px;
  height: 70px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  background-color: #fff;
  margin: 0 auto;
  padding: 2.5rem;
`;
