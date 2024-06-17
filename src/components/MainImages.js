import React from "react";
import { styled } from "styled-components";

const Main = () => {
  return (
    <Images>
      <ImageOne>1</ImageOne>
      <ImageTwo>2</ImageTwo>
      <ImageThree>3</ImageThree>
      <ImageFour>4</ImageFour>
    </Images>
  );
};

export default Main;

const Images = styled.div`
  display: grid;
  grid-template-columns: 23em 23em 23em;
  grid-template-rows: 17em 17em;
  margin: 15px;
`;

const ImageOne = styled.div`
  grid-column: 1 / 1;
  grid-row: 1 / 3;
  background-color: #f7f7f7;
  margin: 15px;
  border-radius: 10px;
`;

const ImageTwo = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  background-color: #e3e3e3;
  margin: 15px;
  border-radius: 10px;
`;

const ImageThree = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background-color: #ebebe9;
  margin: 15px;
  border-radius: 10px;
`;

const ImageFour = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  background-color: #e7e8ea;
  margin: 15px;
  border-radius: 10px;
`;

// const Images = styled.div`
//   display: flex;
//   justify-content: center;
//   align-item: center;
//   margin: 15px;
// `;

// const ImageOne = styled.div`
//   width: 400px;
//   height: 500px;
//   background-color: #d1d1d1;
//   text-align: center;
//   line-height: 500px;
//   margin: 15px;
// `;

// const ImageTwoThree = styled.div`
//   margin: 15px;
// `;

// const ImageTwo = styled.div`
//   width: 400px;
//   height: 235px;
//   background-color: #d1d1d1;
//   text-align: center;
//   line-height: 235px;
// `;

// const ImageThree = styled.div`
//   width: 400px;
//   height: 235px;
//   background-color: #d1d1d1;
//   margin-top: 30px;
//   text-align: center;
//   line-height: 235px;
// `;

// const ImageFour = styled.div`
//   width: 400px;
//   height: 500px;
//   background-color: #d1d1d1;
//   text-align: center;
//   line-height: 500px;
//   margin: 15px;
// `;
