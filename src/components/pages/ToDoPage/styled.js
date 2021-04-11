import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  max-width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1(
    ({isChange}) => css`
    color: ${isChange ? 'red' : 'black'};
    font-size: 20px;
`);

export const VerticalLine = styled.div`
  content: " sss";
  height: 100vh;
  width: 0.7rem;
  background: slateblue;
  position: absolute;
  
`
