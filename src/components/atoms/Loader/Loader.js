import React from 'react';

import Spinner from '../Spinner';

import { Wrapper, Title, customSpinnerStyles } from './styled';

const Loader = ({ children }) => (
  <Wrapper>
    <Title>{children}</Title>
    <Spinner customStyles={customSpinnerStyles} />
  </Wrapper>
);

export default Loader;
