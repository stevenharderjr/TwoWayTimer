import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import style from './style.css';

window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.hydrate(
    <App />,
    document.getElementById('ssr-app')
  );
});
