import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
// Fonts for Material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css';
import { createTheme, ThemeProvider } from '@mui/material';
import UserAuthProvider from 'contexts/UserAuthProvider';
import AppThemeProvider from 'contexts/AppThemeProvider';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  breakpoints: {
    values: {
      lg: 1000,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthProvider>
      <BrowserRouter basename="react-homework-template">
        <ThemeProvider theme={theme}>
          <AppThemeProvider>
            <App />
          </AppThemeProvider>
        </ThemeProvider>
      </BrowserRouter>
    </UserAuthProvider>
  </React.StrictMode>
);
