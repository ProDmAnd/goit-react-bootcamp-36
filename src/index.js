import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
// Fonts for Material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css';
import UserAuthProvider from 'contexts/UserAuthProvider';
import AppThemeProvider from 'contexts/AppThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { ProductsApp } from 'ProductsApp';

const AppTree = (
  <React.StrictMode>
    <UserAuthProvider>
      <BrowserRouter basename="react-homework-template">
        <AppThemeProvider>
          <ProductsApp />
        </AppThemeProvider>
      </BrowserRouter>
    </UserAuthProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(AppTree);
