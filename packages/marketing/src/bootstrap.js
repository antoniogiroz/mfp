import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { setupRouter, router } from './router';

export function mount(el, { onNavigate, initialPath }) {
  setupRouter(initialPath);
  ReactDOM.createRoot(el).render(<RouterProvider router={router} />);

  router.subscribe(({ location }) => {
    onNavigate?.({ pathname: location.pathname });
  });

  return {
    onParentNavigate({ pathname: nextPathname }) {
      if (router.state.location.pathname !== nextPathname) {
        router.navigate(nextPathname);
      }
    },
  };
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_marketing-dev-root');

  if (el) {
    mount(el, {});
  }
}
