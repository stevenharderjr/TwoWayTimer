import React from 'react';
import axios from 'axios';
import style from './app.css';

const App = () => (
  <>
    <div className='app'>Hello World</div>
    <button onClick={e => console.log('Button clicked')}>Hello</button>
  </>
);

export default App;
