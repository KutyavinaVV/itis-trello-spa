import React from 'react';
import { StyledSpinner } from './styled';

const Spinner = ({ customStyles }) => {
  return (
    <StyledSpinner customStyles={customStyles}>
      <div data-testid="loader"  />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </StyledSpinner>
  );
};

export default Spinner;
