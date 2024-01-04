import '@/assets/styles/reset.scss';
import '@/assets/styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '@/pages/home/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
