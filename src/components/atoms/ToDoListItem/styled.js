import styled, { css } from "styled-components";

export const StyledItem = styled.li(
    ({ checked }) => css`
    list-style: none;
    display: inline-block;
    border: 2px solid slateblue;
    background-color: rgba(106, 90, 205, 0.1);
    margin: 10px;
    border-radius: 5px;
    padding: 7px 7px 0 7px;
    align-items: center;
    box-shadow: 0 0 7px rgba(0,0,0,0.3);
    span {
      text-decoration: ${checked ? 'line-through' : 'none'};
      color: ${checked ? 'grey' : 'inherit'};
    }`,
);

