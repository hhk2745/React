import React from 'react';

class TOC extends React.Component{
    // class 안에서 선언된 function은 'function'을 안붙임

    shouldComponentUpdate(nextProps, nextState){
        console.log('>>>>TOC render shouldComponentUpdate', nextProps.data, this.props.data)
        // return false;

        if(nextProps.data === this.props.data){
            return false;
        }
        return true;
    }

    render(){
        console.log('>>>>TOC render')
        const {data, onChangePage} = this.props;

        let lists = [];
        let i=0;
        while(i < data.length){
            lists.push(
                <li key={data[i].id}>
                    <a
                        href={`/contents/${data[i].id}`}
                        onClick={function(id, e){
                            e.preventDefault();
                            onChangePage(id);
                        }.bind(this, data[i].id)}
                        // bind(this, data[i].id) 매개변수로 값을 전달하면 function(id, e)로 받을 수 있고 이벤트(e)는 1자리씩 밀려남
                    >
                        {data[i].title}
                    </a>
                </li>
            )
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