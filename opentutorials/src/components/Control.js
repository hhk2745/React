import React, {Component} from 'react';

class Control extends Component{

    constructor(props){
        super(props);


    }

    onClickHandler = (mode, e) => {
        const {onChangeMode} = this.props;
        e.preventDefault();

        onChangeMode(mode);


    }

    render(){
        return(
            <div>
                <ul>
                    <li><a href={'/create'} onClick={this.onClickHandler.bind(this,'create')}>create</a></li>
                    <li><a href={'/update'} onClick={this.onClickHandler.bind(this,'update')}>update</a></li>
                    <li><input type="button" value={'delete'} onClick={this.onClickHandler.bind(this,'delete')}/></li>
                </ul>
            </div>
        )
    }
}

export default Control;