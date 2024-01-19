import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/header.jsx';

export function Layout() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
