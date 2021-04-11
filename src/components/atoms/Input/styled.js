import styled, {css} from "styled-components";

export const StyledInput = styled.input(
    ({disabled}) => css`
      width: 150px;
      border: 1px solid slateblue;
      margin: 20px;

      &:focus {
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
      }
      
      ${disabled &&
      css`
        border: 1px solid black;
      `}
    `,
);
