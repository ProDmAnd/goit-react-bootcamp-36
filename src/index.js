import React from 'react';
import ReactDOM from 'react-dom/client';
// Fonts for Material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css';
import UserAuthProvider from 'contexts/UserAuthProvider';
import { BrowserRouter } from 'react-router-dom';
import { ProductsApp } from 'ProductsApp';
import { store } from 'redux/store';
import { Provider } from 'react-redux';

const AppTree = (
  <React.StrictMode>
    <UserAuthProvider>
      <BrowserRouter basename="react-homework-template">
        <Provider store={store}>
          <ProductsApp />
        </Provider>
      </BrowserRouter>
    </UserAuthProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(AppTree);
