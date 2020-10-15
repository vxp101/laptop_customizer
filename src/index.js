import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ComputerParts from './ComputerParts/ComputerParts'


ReactDOM.render(<App features={ComputerParts} />, document.getElementById('root'));
