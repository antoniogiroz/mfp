import React from 'react';
import { Header } from '../components/header.jsx';
import { MarketingApp } from '../components/marketing-app.jsx';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
}
