import React from 'react';
import { element } from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from './variables';

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

Theme.propTypes = {
  children: element.isRequired,
};

export default Theme;
