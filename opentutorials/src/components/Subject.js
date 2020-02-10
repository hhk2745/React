import React from 'react';

class Subject extends React.Component{
    // class 안에서 선언된 function은 'function'을 안붙임

    render(){
        const {title, sub} = this.props;
        return(
            <header>
                <h1>
                    <a href={"/"}>{ title }</a>
                </h1>
                { sub }
            </header>
        )
    }
}

export default Subject;