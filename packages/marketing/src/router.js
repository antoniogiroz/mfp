import React from 'react';
import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import { Landing } from './components/landing.jsx';
import { Pricing } from './components/pricing.jsx';

const routes = [
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
];

export const router =
  process.env.NODE_ENV === 'development'
    ? createBrowserRouter(routes)
    : createMemoryRouter(routes);
