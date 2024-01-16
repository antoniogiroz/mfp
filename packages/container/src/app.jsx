import React from 'react';
import { MarketingApp } from '../components/marketing-app.jsx';

import { createTheme } from '@mui/material/styles';

const theme = createTheme();

export function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <h1>Hi there!</h1>
        <hr />
        <MarketingApp />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
