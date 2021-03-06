import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 33%;

  :focus {
    outline: none;
  }
`;

export default function Square({ value, onClick }) {
  return <Button onClick={onClick}>{value}</Button>;
}
