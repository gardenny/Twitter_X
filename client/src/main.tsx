import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes } from '@generouted/react-router/lazy';
import './index.css';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>
);