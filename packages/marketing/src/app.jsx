import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Landing } from './components/landing.jsx';
import { Pricing } from './components/pricing.jsx';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

export function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: '/pricing',
      element: <Pricing />,
    },
  ]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
