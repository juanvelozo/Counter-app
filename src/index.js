import React from 'react';
import ReactDOM from 'react-dom';
// import FirstApp from './FirstApp';
import CounterApp from './CounterApp';
import './index.css';

const divRoot = document.querySelector('#root');

// ReactDOM.render( <FirstApp salute="Hello"/> , divRoot); 
ReactDOM.render(<CounterApp />, divRoot);