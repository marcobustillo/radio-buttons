import styled, { css } from "styled-components";

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  ${(props) =>
    props.alignItemsCenter &&
    css`
      align-items: center;
    `}
  ${(props) =>
    props.justifyContentCenter &&
    css`
      justify-content: center;
    `}
`;

export default FlexColumn;
