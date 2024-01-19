import React, { lazy, useState } from 'react';
import { setupRouter, router } from './router.js';
import { RouterProvider } from 'react-router-dom';
import { Layout } from './layout.jsx';

const MarketingApp = lazy(() => import('./components/marketing-app.jsx'));
const AuthApp = lazy(() => import('./components/auth-app.jsx'));

export function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const routes = [
    {
      path: '/',
      element: (
        <Layout
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
      ),
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
          element: <AuthApp onSignIn={() => setIsSignedIn(true)} />,
        },
      ],
    },
  ];

  setupRouter(routes);

  return <RouterProvider router={router} />;
}
