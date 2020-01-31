import React from 'react';

class ProductRow extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>{this.props.name} / {this.props.price}</div>
        )
    }
}

export default ProductRow;