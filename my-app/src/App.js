import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Clock';
import Clock from "./Clock";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
const name1 = "hanho1";
const name2 = "hanho2";
const name3 = "hanho3";
function App() {
    return (
        <div>
            <Clock name={name1}/>
            <Clock name={name2}/>
            <Clock name={name3}/>
        </div>
    );
}

export default App;
