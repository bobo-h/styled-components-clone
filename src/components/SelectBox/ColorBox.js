import React, { useState } from "react";
import { styled } from "styled-components";

const ColorBox = () => {
  const [selectedColor, setSelectedColor] = useState("white");

  return (
    <div>
      <ColorSelectBox>
        <ColorText>Color</ColorText>
        <ColorButtonSelectBox>
          <ColorButton
            backgroundColor="white"
            selected={selectedColor === "white" ? "3px solid gray" : "none"}
            onClick={() => setSelectedColor("white")}
          ></ColorButton>
          <ColorButton
            backgroundColor="#e5e7eb"
            selected={selectedColor === "#e5e7eb" ? "3px solid white" : "none"}
            onClick={() => setSelectedColor("#e5e7eb")}
          ></ColorButton>
          <ColorButton
            backgroundColor="black"
            selected={selectedColor === "black" ? "3px solid white" : "none"}
            onClick={() => setSelectedColor("black")}
          ></ColorButton>
        </ColorButtonSelectBox>
      </ColorSelectBox>
    </div>
  );
};

export default ColorBox;

const ColorSelectBox = styled.div`
  margin: 2em 0;
`;

const ColorText = styled.div`
  font-size: 0.95em;
  font-weight: 500;
  margin-bottom: 0.5em;
`;

const ColorButtonSelectBox = styled.div`
  padding: 10px 0;
`;

const ColorButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 20px;
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
  border: ${(props) => props.selected};
  margin-right: 1.2em;
  box-shadow: ${(props) =>
    props.selected ? "0 0 0 1px rgba(0, 0, 0, 0.2)" : "none"};
`;
