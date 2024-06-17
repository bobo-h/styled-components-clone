import React from "react";
import { styled } from "styled-components";
import MainSelectBox from "./SelectBox/MainSelectBox";

const MainText = () => {
  return (
    <MainBox>
      <Texts>
        <div>
          <NameText>Basic Tee 6-Pack</NameText>
          <TheBasicText>
            The Basic Tee 6-Pack allows you to fully express your vibrant
            personality with three grayscale options. Feeling adventurous? Put
            on a heather gray tee. Want to be a trendsetter? Try our exclusive
            colorway: "Black". Need to add an extra pop of color to your outfit?
            Our white tee has you covered.
          </TheBasicText>
        </div>
        <br />
        <div>
          <HighlightsText>Highlights</HighlightsText>
          <HandText>Hand cut and sewn locally</HandText>
          <HandText>Dyed with our proprietary colors</HandText>
          <HandText>Pre-washed & pre-shrunk</HandText>
          <HandText>Ultra-soft 100% cotton</HandText>
        </div>
        <br />
        <div>
          <DetailsText>Details</DetailsText>
          <The6PackText>
            The 6-Pack includes two black, two white, and two heather gray Basic
            Tees. Sign up for our subscription service and be the first to get
            new, exciting colors, like our upcoming "Charcoal Gray" limited
            release.
          </The6PackText>
        </div>
      </Texts>
      <Hr />
      <MainSelectBox />
    </MainBox>
  );
};

export default MainText;

const MainBox = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  margin: 10px 30px;
  width: 69em;
`;

const Texts = styled.div`
  width: 63%;
`;

const NameText = styled.p`
  font-size: 2em;
  font-weight: bolder;
`;

const TheBasicText = styled.p`
  font-size: 1.1em;
  color: #271827;
`;

const HighlightsText = styled.p`
  font-size: 0.95em;
  font-weight: 500;
`;

const HandText = styled.li`
  color: #515d63;
  font-size: 0.94em;
`;

const DetailsText = styled.p`
  font-size: 0.95em;
  font-weight: 500;
`;

const The6PackText = styled.p`
  color: #515d63;
  font-size: 0.94em;
`;

const Hr = styled.hr`
  width: 1px;
  background-color: #e5e7eb;
  border: none;
`;
