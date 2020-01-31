import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import FIlterableProductTable from "./FIlterableProductTable";

// 부모(FIlterableProductTable)에서 받아오면될듯
let before = "";

class ProductTable extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        // const nameList = this.state.names.map( (name,index) => (<li key={index}>{name}</li>) );

        const W = this.props.dummyData.map((v, i)=>{
            let isDiff = (before !== v.category);
            before = v.category;

            return (isDiff) ?
                (
                    <>
                        <ProductCategoryRow category={v.category} key={v.id}/>
                        <ProductRow name={v.name} price={v.price} key={i}/>
                    </>
                )
                : (
                    <ProductRow name={v.name} price={v.price} key={v.id}/>
                );
        });

        return(
            <div>
                <div> Name / Price </div>
                <div>------------------------</div>
                <div>
                    {W}
                </div>
            </div>
        );
    }


}

export default ProductTable;