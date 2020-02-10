import React from 'react';

class Content extends React.Component{
    // class 안에서 선언된 function은 'function'을 안붙임
    render(){
        const {title, desc} = this.props;

        return(
            <article>
                <h2>{title}</h2>
                {desc}
            </article>
        )
    }
}
export default Content;