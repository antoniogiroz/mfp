import { createBrowserRouter } from 'react-router-dom';

export let router;

export function setupRouter(routes) {
  router = createBrowserRouter(routes);
}
