import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/header.jsx';
import { Progress } from './components/progress.jsx';

export function Layout({ isSignedIn, onSignOut }) {
  return (
    <div>
      <Header isSignedIn={isSignedIn} onSignOut={onSignOut} />
      <Suspense fallback={<Progress />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
