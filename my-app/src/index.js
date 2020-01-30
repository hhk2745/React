import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './Clock';
import TestModule from './TestModule';
import App from './App';
import Comment from './Comment';
import Toggle from './Toggle';
import Greeting from './Greeting';
import LoginControl from './LoginControl';
import NameForm from './NameForm';
import EssayForm from './EssayForm';

import * as serviceWorker from './serviceWorker';
import FlavorForm from "./FlavorForm";
import Reservation from "./Reservation";
import Calculator from "./Calculator";


ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();