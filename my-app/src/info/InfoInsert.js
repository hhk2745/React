import React, { Component } from 'react';

class InfoInsert extends Component {
    state = {
        name: '',
        age: '',
    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSumbit = e => {
        e.preventDefault(); // 이벤트 방지(rerender 방지)
        this.props.onCreate(this.state);

        // 입력 후 input값 초기화
        this.setState({
            name: '',
            age: '',
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSumbit}>
                <input
                    name="name"
                    placeholder="이름"
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                {this.state.name}
                <br />
                <input
                    name="age"
                    placeholder="나이"
                    onChange={this.handleChange}
                    value={this.state.age}
                />
                {this.state.age}
                <br />
                <br />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default InfoInsert;