import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tree from './component/Tree/Tree';
import List from './component/List/List';
import reportWebVitals from './reportWebVitals';
import salakaNagara from './data/nobles-tree/salaka-nagara.json';

document.body.classList.add('main-background');

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
      <Tree data={salakaNagara}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
