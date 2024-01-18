import React from 'react';
import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import { SignIn } from './components/sign-in.jsx';
import { SignUp } from './components/sign-up.jsx';

const routes = [
  {
    path: '/auth/sign-in',
    element: <SignIn />,
  },
  {
    path: '/auth/sign-up',
    element: <SignUp />,
  },
];

export const router =
  process.env.NODE_ENV === 'development'
    ? createBrowserRouter(routes)
    : createMemoryRouter(routes);
