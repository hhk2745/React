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
    _handleOnClickToggleState = (index) => {
        const { todoItems } = this.state
        const newTodoItems = todoItems.slice(0)
        newTodoItems[index].isCompleted = !todoItems[index].isCompleted
        this.setState({ todoItems: newTodoItems })
    }

    _handleOnClickRemove = (id) => {
        const { todoItems } = this.state
        const newTodoItems = todoItems.filter(item => item.id !== id)
        this.setState({ todoItems: newTodoItems })
    }

    render(){
        const renderCancelButton = item => (
            <button
                className='btn btn-danger btn-sm'
                style={{ marginLeft: 5 }}
                onClick={() => this._handleOnClickRemove(item.id)}
            >
                삭제
            </button>
        )

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
                                onKeyDown={e => e.keyCode === 13 ? this._handleOnClickAddItem() : null}
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
                <div className='row' style={ { marginTop: 20 } }>
                    <div className='col-6'>
                        <h3>해야할 일</h3>
                        {
                            this.state.todoItems.filter(item => !item.isCompleted).map(item =>
                                <div key={item.id} style={{ margin: 10 }}>
                                    <span style={{ marginRight: 5 }}>- {item.title}</span>
                                    <button
                                        className='btn btn-success btn-sm'
                                        onClick={() => this._handleOnClickToggleState(item.id)}
                                    >
                                        완료
                                    </button>

                                    {renderCancelButton(item)}
                                </div>
                            )
                        }
                    </div>
                    <div className='col-6'>
                        <h3>완료한 일</h3>
                        {
                            this.state.todoItems.filter(item => item.isCompleted).map(item =>
                                <div key={item.id} style={{ margin: 10 }}>
                                    <span style={{ marginRight: 5 }}>- {item.title}</span>
                                    <button
                                        className='btn btn-warning btn-sm'
                                        onClick={() => this._handleOnClickToggleState(item.id)}
                                    >
                                        취소
                                    </button>
                                    {renderCancelButton(item)}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default App;