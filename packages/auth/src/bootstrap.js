import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { setupRouter, router } from './router';

export function mount(el, { onNavigate, initialPath, onSignIn }) {
  setupRouter(initialPath, onSignIn);

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
  const el = document.querySelector('#_auth-dev-root');

  if (el) {
    mount(el, {});
  }
}
