import React from 'react'

let todoId = 0 // todo 아이템의 id를 증가시키며 저장하는 변수

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todoItems : [],
            todoInput : ''
        }
        this._handleOnClickAddItem = this._handleOnClickAddItem.bind(this);

    }

    _handleOnChangeTodoInput = (e) =>{
        this.setState({todoInput: e.target.value})
    }

    _handleOnClickAddItem = (e) => {
        const { todoInput, todoItems } = this.state;
        console.log(todoInput, todoItems,' << todoInput, todoItem');
        const todoItem = {
            id: todoId++,
            title: todoInput,
            isCompleted: false
        }
        const newTodoItems = todoItems.slice(0)
        newTodoItems.push(todoItem);

        if(todoInput.length < 1) {
            alert('텍스트가 비어있습니다.');
            document.getElementsByClassName("form-control")[0].focus();
        }else{
            this.setState({ todoItems: newTodoItems, todoInput: '' })
        }
    }

    render(){
        return(
            <div className='container' style={{ maxWidth: 600, padding: '20px 0' }}>
                <div className='row'>
                    <div className='col text-center'>
                        <div className='input-group'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='새로운 할 일을 입력해주세요.'
                                value={this.state.todoInput}
                                onChange={this._handleOnChangeTodoInput}
                                // onKeyDown={e => e.keyCode === 13 ? this._handleOnClickAddItem() : null}
                            />
                            <div className='input-group-append'>
                                <button
                                    className='btn btn-outline-secondary'
                                    onClick={this._handleOnClickAddItem}
                                >
                                    등록
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default App;