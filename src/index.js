import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Створення елементу React. Імперативний метод
// Тип, пропси, ...діти
const elem = React.createElement('a', { src: 'link-to-somwhere' }, 'Go to ...');

// Передача елементів як дітей
const parentElement = React.createElement('div', {}, elem);

// Створення елементів React. Декларативний метод
const Elem = (
  <div>
    <a href="link-to-somewher">Go To ...</a>
  </div>
);
