import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/header.jsx';

export function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
