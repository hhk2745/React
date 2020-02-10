import React from 'react';

class TOC extends React.Component{
    // class 안에서 선언된 function은 'function'을 안붙임


    render(){
        const data = this.props.data;
        let lists = [];
        let i=0;
        while(i < data.length){
            lists.push(<li key={data[i].id}><a href={data[i].id}>{data[i].title}</a></li>)
            i++;
        }

        return(
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        )
    }
}
export default TOC;