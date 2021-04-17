import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  min-height: 16rem;
  opacity: 0.7;
  z-index: 1;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const customSpinnerStyles = () => css`
  font-size: 3em;
`;
