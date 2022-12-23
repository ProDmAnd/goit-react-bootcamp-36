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

const theme = createTheme({
  breakpoints: {
    values: {
      lg: 1000,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

const filter = (targetArray = [], callback) => {
  const arrayCopy = [];
  for (let index = 0; index < targetArray.length; index++) {
    const element = targetArray[index];
    if (element > callback()) {
      arrayCopy.push(element);
    }
  }

  return arrayCopy;
};

const initialArray = [1, 23, 4, 56, 67, 8, 8, 42, 123, 22, 2, 2, 1, 3, 45];

// const filterCallback = num => () => num;

function filterCallback(num) {
  alert('CALL FUNCTION WHICH RETURN FUNCTION ' + num);
  return function () {
    console.log('call callback', num);
    return num;
  };
}
console.log('initial open');
const biggerThanTwenty = filterCallback(20);
console.log('second call');
const biggerThanFive = filterCallback(5);
console.log(filter(initialArray, biggerThanFive));
console.log(filter(initialArray, biggerThanTwenty));
