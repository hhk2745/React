import React from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }


        this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        console.log(123);
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={this.componentWillUnmount}>STOP</button>
            </div>
        )
    }
}

export default Clock;
