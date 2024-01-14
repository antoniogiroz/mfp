import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Landing } from './components/landing.jsx';
import { Pricing } from './components/pricing.jsx';

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
    <>
      <RouterProvider router={router} />
    </>
  );
}
