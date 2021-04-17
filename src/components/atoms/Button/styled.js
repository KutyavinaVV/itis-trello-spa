import styled, {css} from "styled-components";

export const StyledButton = styled.button(
    ({disabled}) => css`
      color:white;
      background: slateblue;
      padding: 1px;
      border: none;
      margin: 10px;
      width: 60px;
      height: 25px;
      text-align: center;
      
      &:hover {
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
      }
      
      ${disabled &&
      css`
        background: black;
        &:hover {
          box-shadow: none;
        }
      `}
    `,
);