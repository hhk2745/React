import React from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends React.Component {
    constructor(props){
        super(props)

        this.state = {now: new Date()}

        this.tick = this.tick().bind(this);
    }

    tick(){


    }

    render() {
        return (
            <div className="App">
                HelloWorld
            </div>
        );
    }
}

export default Clock;
