import React from "react";

// Counter
class TestModule3 extends React.Component{
    constructor(props){
        super(props);

        // this.handleIncrease = this.handleIncrease.bind(this);
        // this.handleDecrease = this.handleDecrease.bind(this);
        const { number } = this.state;
        console.log(number);
    }


    // class field를 사용하지않는경우 constructor 에서 초기화 시켜줘야함
    state = {
        number: 0,
        foo: {
            bar: 0,
            foobar: 1
        }
    }

    // handleIncrease(){
    //     this.setState({
    //         number: this.state.number + 1
    //     });
    // }
    handleIncrease = () => {
        const { number } = this.state;

        this.setState({
            number: number + 1
        });
    }
    // handleDecrease(){
    //     this.setState({
    //         number: this.state.number -1
    //     });
    // }
    handleDecrease = () => {
        this.setState(
            (state) => ({
                number: state.number -1
            })
        );
    }

    changeFoo = () => {
        this.setState({
            foo:{
                //bar, foobar
                ...this.state.foo,
                foobar:2
            }
        });
    }

    render(){
        return(
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
                <button onClick={this.changeFoo}>Foo</button>
            </div>
        )
    }

    componentDidMount() {
        // 외부 라이브러리 연동: D3, masonry, etc
        // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
        // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
    }

    componentWillReceiveProps(nextProps) {
        // this.props 는 아직 바뀌지 않은 상태
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // 여기서는 setState 를 하는 것이 아니라
        // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
        // 사용됩니다.
        /*
        if (nextProps.value !== prevState.value) {
          return { value: nextProps.value };
        }
        return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
        */
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        // return false 하면 업데이트를 안함
        // return this.props.checked !== nextProps.checked
        return true;
    }
}


export default TestModule3;