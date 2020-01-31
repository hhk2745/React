import React from 'react';

class ProductCategoryRow extends React.Component {

    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>{this.props.category}</div>
        )
    }
}

export default ProductCategoryRow;