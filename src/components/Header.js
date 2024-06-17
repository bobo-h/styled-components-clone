import React from "react";
import { styled } from "styled-components";

const Header = () => {
  return (
    <Headers>
      <HeaderMen>Men</HeaderMen>
      <HeaderClothing>Clothing</HeaderClothing>
      <HeaderName>Basic Tee 6-Pack</HeaderName>
    </Headers>
  );
};

export default Header;

const Headers = styled.div`
  display: flex;
  justify-content: start;
  align-item: center;
  margin: 20px 15px 0 22px;
`;

const HeaderMen = styled.div`
  padding: 0 10px;
  font-weight: 500;
  font-size: 0.9em;
`;

const HeaderClothing = styled.div`
  padding: 0 10px;
  font-weight: 500;
  border-right: 1px solid black;
  border-left: 1px solid black;
  font-size: 0.9em;
`;

const HeaderName = styled.div`
  color: gray;
  padding: 0 10px;
  font-size: 0.9em;
`;
