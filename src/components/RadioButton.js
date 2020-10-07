import React from "react";
import styled, { css } from "styled-components";

const RadioContainer = styled.div`
  margin: 5px;
`;

const RadioButtonStyle = styled.input``;

const RadioButton = ({
  id,
  label,
  name,
  disabled,
  checked,
  value,
  onChange,
}) => {
  return (
    <RadioContainer key={id}>
      <label>
        <RadioButtonStyle
          id={id}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
        {label}
      </label>
    </RadioContainer>
  );
};

export default RadioButton;
