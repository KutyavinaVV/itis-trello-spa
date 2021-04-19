import styled, { css } from "styled-components";

export const StyledItem = styled.li(
    ({ checked }) => css`
    list-style: none;
    display: inline-block;
    border: 2px solid slateblue;
    background-color: rgba(106, 90, 205, 0.1);
    margin: 10px;
    border-radius: 5px;
    align-items: center;
    box-shadow: 0 0 7px rgba(0,0,0,0.3);
    padding: 1rem;  
    text-align: center;
    h4 {
      display: block;
      margin: 0;
      margin-bottom: 1rem;
    }  
    a {
      text-decoration: none;
      color: black;
      :hover {
        text-decoration: underline;
      }
    }
    span {
      text-decoration: ${checked ? 'line-through' : 'none'};
      color: ${checked ? 'grey' : 'inherit'};
    }`,
);

export const StyledInfo = styled.li`
    
`

export const StyledLink = styled.a`
    display: inline-block;
    margin-top: 1rem;
    margin-left: 0.5rem;
    &:first-child {
      margin-left: 0;
    }
`

