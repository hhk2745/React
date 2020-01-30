import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true, isDeleted: false};

        // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    }

    handleClick(){
        this.setState(
            {isToggleOn: this.state.isToggleOn}
        );

        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));

    }
    handleDelete(element, e){
        // juqery 상위 div remove() ?
        // e.currentTarget()
    }

    render() {
        return (
            <>
                <button onClick={(e) => this.handleClick(e)}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <div>
                    <button onClick={(e) => this.handleDelete(this, e)}>
                        {this.state.isDeleted ? 'Delete' : 'Live'}
                    </button>
                </div>
            </>
        );
    }
}
export default Toggle;