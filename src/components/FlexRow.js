import styled, { css } from "styled-components";

const FlexRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  ${(props) =>
    props.justifyContentCenter &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.alignItemsCenter &&
    css`
      align-items: center;
    `}
    ${(props) =>
    props.justifyContentFlexEnd &&
    css`
      justify-content: flex-end;
    `}
    ${(props) =>
    props.flexWrap &&
    css`
      flex-wrap: wrap;
    `}
    ${(props) =>
    props.justifyContentSpaceBetween &&
    css`
      justify-content: space-between;
    `};

  ${(props) =>
    props.justifyContentSpaceAround &&
    css`
      justify-content: space-around;
    `};
`;

export default FlexRow;
