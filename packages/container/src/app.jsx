import React, { lazy, useEffect, useState } from 'react';
import { setupRouter, router } from './router.js';
import { Navigate, RouterProvider, useNavigate } from 'react-router-dom';
import { Layout } from './layout.jsx';

const MarketingApp = lazy(() => import('./components/marketing-app.jsx'));
const AuthApp = lazy(() => import('./components/auth-app.jsx'));
const DashboardApp = lazy(() => import('./components/dashboard-app.jsx'));

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
          path: 'pricing', // TODO: How to avoid define this path here.
          element: <MarketingApp />,
        },
        {
          path: 'auth/*',
          element: <AuthApp onSignIn={() => setIsSignedIn(true)} />,
        },
        {
          path: 'dashboard',
          element: isSignedIn ? (
            <DashboardApp />
          ) : (
            <Navigate to="/auth/sign-in" />
          ),
        },
      ],
    },
  ];

  setupRouter(routes);

  useEffect(() => {
    if (isSignedIn) {
      router.navigate('/dashboard');
    }
  }, [isSignedIn]);

  return <RouterProvider router={router} />;
}
