import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app.jsx';

export function mount(el) {
  ReactDOM.createRoot(el).render(<App />);
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_marketing-dev-root');

  if (el) {
    mount(el);
  }
}
