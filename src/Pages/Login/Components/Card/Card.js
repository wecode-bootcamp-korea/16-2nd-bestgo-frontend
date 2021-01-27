import React from "react";
import styled from "styled-components";

function Card({ children }) {
  return <CardLayout>{children}</CardLayout>;
}

export const CardLayout = styled.section`
  width: 100%;
  max-width: 424px;
  height: 560px;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  background-color: #fff;
  margin: 0 auto;
  padding: 2.5rem;
`;

export default Card;
