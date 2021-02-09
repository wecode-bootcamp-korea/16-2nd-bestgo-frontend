import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";
import { BestFrame } from "./Frame/Frame";
import { NextButton } from "../Best";
import { CardLayout } from "../../Login/Components/Card/Card";

function BestRegions({ props }) {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingNWame}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
  };

  const history = useHistory();

  const handleNext = () => {
    history.push("/best-signup");
  };

  return (
    <RegionsLayout>
      <DaumFrameStyle>
        <DaumPostcodeStyle onComplete={handleComplete} {...props} autoClose />
        <NextButtonStyle default onClick={handleNext}>
          <span>다음</span>
        </NextButtonStyle>
      </DaumFrameStyle>
    </RegionsLayout>
  );
}

export default BestRegions;

export const DaumPostcodeStyle = styled(DaumPostcode)`
  display: block;
  width: 700px;
  height: 500px;
  padding: 1rem;
  position: relative;
  bottom: 5%;
  right: 20%;
`;

export const DaumFrameStyle = styled(BestFrame)`
  border: 0;
`;

export const NextButtonStyle = styled(NextButton)`
  left: 15%;
  margin-top: 10%;
`;

export const RegionsLayout = styled(CardLayout)`
  border: 0;
  padding: 0;
`;
