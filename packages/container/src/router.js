import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MarketingApp } from './components/marketing-app.jsx';
import { AuthApp } from './components/auth-app.jsx';
import { Layout } from './layout.jsx';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <MarketingApp />,
      },
      {
        path: '/pricing', // TODO: How to avoid define this path here.
        element: <MarketingApp />,
      },
      {
        path: 'auth/*',
        element: <AuthApp />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
