import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { router } from './Router/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <head>
        <meta name="google-site-verification" content="ulS3lg_Kpcfo6UU6flUpefYomLJ3wrL8pVuXvVlRNQk" />
      </head>

      <div className="bg-[#2f2477]">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </React.StrictMode>,
);
