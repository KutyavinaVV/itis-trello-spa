import styled, {css} from "styled-components";

export const StyledTask = styled.li(
    ({ check }) => css`
    list-style: none;
    display: block;
    text-align: left;
    margin: 0.4rem;
    a {
      text-decoration: ${check ? 'line-through' : 'none'};
      color: black;
      :hover {
        text-decoration: underline;
      }
    }    
`);