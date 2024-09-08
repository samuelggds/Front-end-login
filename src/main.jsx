import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import RoutesUsers from './routes';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutesUsers />
  </StrictMode>,
)
