import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <RouterProvider router={router} />
);
