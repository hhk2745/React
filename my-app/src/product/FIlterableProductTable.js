import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
/**
 * state
 * 1. search text
 * 2. search check stock
 */
const dummyData=[
    {id:1, category: "Sporting Goods", name: "Football", price: "$49.99", stocked: true},
    {id:2, category: "Sporting Goods", name: "Baseball", price: "$9.99", stocked: true},
    {id:3, category: "Sporting Goods", name: "Basketball", price: "$29.99", stocked: false},
    {id:4, category: "Electronics", name: "iPod Touch", price: "$99.99", stocked: true},
    {id:5, category: "Electronics", name: "iPhone 5", price: "$399.99", stocked: false},
    {id:6, category: "Electronics", name: "Nexus 7", price: "$199.99", stocked: true}
];

class FIlterableProductTable extends React.Component {

    constructor(props){
        super(props);
        this.state = {searchText: '', searchChkStock: false};
    }

    onTextChange = (t) => {
        this.setState({searchText:t});

        let regex = new RegExp(t);

        // console.log(regex);
        dummyData.map((v, i)=>{
            // console.log(regex, v.name, regex.test(v.name));
            if(regex.test(v.name)){
                console.log(t);
            }
        })
    }
    onCheckChange = (b) => {
        this.setState({searchChkStock:b})
    }

    render(){
        return(
            <div>
                <SearchBar searchText={this.state.searchText}
                           searchChkStock={this.state.searchChkStock}
                           onTextChange={this.onTextChange}
                           onCheckChange={this.onCheckChange}
                />
                <ProductTable dummyData={dummyData}/>
            </div>
        )
    }


}

export default FIlterableProductTable;