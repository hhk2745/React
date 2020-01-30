import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClockSub from './ClockSub';


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), name: props.name};
    }
    componentDidMount() {
        // 컴포넌트 출력물이 DOM에 렌더링 된 후에 실행
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
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
                <h1>Hello, world!</h1>
                <h2 id="h2">It is {this.state.date.toLocaleTimeString()}.</h2>
                <ClockSub name={this.state.name}/>
            </div>
        );
    }

}

export default Clock;
