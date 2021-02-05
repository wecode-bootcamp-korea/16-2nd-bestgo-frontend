import React from "react";
import { useHistory } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";
import { BestFrame } from "./Frame/Frame";
import { NextButton } from "../Best";

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
    <DaumFrameStyle>
      <DaumPostcodeStyle onComplete={handleComplete} {...props} />
      <NextButtonStyle default onClick={handleNext}>
        <span>다음</span>
      </NextButtonStyle>
    </DaumFrameStyle>
  );
}

export default BestRegions;

export const DaumPostcodeStyle = styled(DaumPostcode)`
  display: block;
  width: 600px;
  height: 500px;
  padding: 1rem;
  margin: 1rem;
`;

export const DaumFrameStyle = styled(BestFrame)`
  border: 0;
`;

export const NextButtonStyle = styled(NextButton)`
  left: 42%;
`;
