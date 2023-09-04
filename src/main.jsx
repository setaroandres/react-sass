import { StyledEngineProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RxCardCompareApp } from './RxCardCompareApp.jsx';
import './styles.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <RxCardCompareApp />
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>,
)
