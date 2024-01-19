import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout.jsx';

const MarketingApp = lazy(() => import('./components/marketing-app.jsx'));
const AuthApp = lazy(() => import('./components/auth-app.jsx'));

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
