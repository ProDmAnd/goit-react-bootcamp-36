import React from 'react';
import ReactDOM from 'react-dom/client';
// Fonts for Material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ProductsApp } from 'ProductsApp';
import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="goit-react-bootcamp-36">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ProductsApp />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
