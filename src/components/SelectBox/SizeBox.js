import React, { useState } from "react";
import { styled } from "styled-components";

const SizeBox = () => {
  const [selectedSize, setSelectedSize] = useState("XS");

  return (
    <div>
      <SizeSelectBoxText>
        <SizeText>Size</SizeText>
        <SizeGuideText>Size guide</SizeGuideText>
      </SizeSelectBoxText>
      <SizeButtonSelectBox>
        <SizeButton
          margin="0 0.75em 0.5em 0"
          cursor="not-allowed"
          backgroundColor="#f9fafb"
          background="linear-gradient(to bottom right, #f9fafb calc(50% - 2px), #e5e7eb, #f9fafb calc(50% + 2px))"
          color="#e5e7eb"
        >
          XXS
        </SizeButton>
        <SizeButton
          margin="0 0.5em 0.5em 0.25em"
          cursor="pointer"
          backgroundColor="white"
          selected={selectedSize === "XS"}
          onClick={() => setSelectedSize("XS")}
        >
          XS
        </SizeButton>
        <SizeButton
          margin="0 0.25em 0.5em 0.5em"
          cursor="pointer"
          backgroundColor="white"
          selected={selectedSize === "S"}
          onClick={() => setSelectedSize("S")}
        >
          S
        </SizeButton>
        <SizeButton
          margin="0 0 0.5em 0.75em"
          cursor="pointer"
          backgroundColor="white"
          selected={selectedSize === "M"}
          onClick={() => setSelectedSize("M")}
        >
          M
        </SizeButton>
        <SizeButton
          margin="0.5em 0.75em 0 0"
          cursor="pointer"
          backgroundColor="white"
          selected={selectedSize === "L"}
          onClick={() => setSelectedSize("L")}
        >
          L
        </SizeButton>
        <SizeButton
          margin="0.5em 0.5em 0 0.25em"
          cursor="pointer"
          backgroundColor="white"
          selected={selectedSize === "XL"}
          onClick={() => setSelectedSize("XL")}
        >
          XL
        </SizeButton>
        <SizeButton
          margin="0.5em 0.25em 0 0.5em"
          cursor="pointer"
          backgroundColor="white"
          selected={selectedSize === "2XL"}
          onClick={() => setSelectedSize("2XL")}
        >
          2XL
        </SizeButton>
        <SizeButton
          margin="0.5em 0 0 0.75em"
          cursor="pointer"
          backgroundColor="white"
          selected={selectedSize === "3XL"}
          onClick={() => setSelectedSize("3XL")}
        >
          3XL
        </SizeButton>
      </SizeButtonSelectBox>
      <AddButton>Add to bag</AddButton>
    </div>
  );
};

export default SizeBox;

const SizeSelectBoxText = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
`;

const SizeText = styled.div`
  font-size: 0.95em;
  font-weight: 500;
  margin-bottom: 0.5em;
  flex: 1;
`;

const SizeGuideText = styled.div`
  color: #5546e7;
  font-size: 0.95em;
  font-weight: 500;
  margin-bottom: 0.5em;
  flex: 0.28;
  cursor: pointer;
`;

const SizeButtonSelectBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 4.4em 4.4em;
  margin: 1em 0 3em 0;
`;

const SizeButton = styled.button`
  border: ${(props) =>
    props.selected ? "3px solid #4f46e5" : "1px solid #e5e7eb"};
  border-radius: 5px;
  box-shadow: 0 0 2px 0 rgba(154, 154, 154, 0.5);
  background: ${(props) => props.background};
  background-color: ${(props) => props.backgroundColor};
  margin: ${(props) => props.margin};
  cursor: ${(props) => props.cursor};
  color: ${(props) => props.color};

  &:hover {
    background-color: #f9fafb;
  }
`;

const AddButton = styled.button`
  background-color: #4f46e5;
  border: none;
  border-radius: 7px;
  color: white;
  cursor: pointer;
  width: 100%;
  height: 3em;
  font-size: 1em;
  font-weight: 600;

  &:hover {
    background-color: #4231db;
`;
