import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: "white";
  color: "palevioletred";
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px ${(props) => (props.disabled ? "dotted" : "solid")} palevioletred;
  border-radius: 3px;
`;

export default Button;
