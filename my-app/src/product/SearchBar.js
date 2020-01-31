import React from 'react';


class SearchBar extends React.Component {
    constructor(props){
        super(props)
    }

    handleTextChange = (e) => {
        this.props.onTextChange(e.target.value);
    }
    handleCheckChange = (e) => {
        this.props.onCheckChange(e.target.checked);
    }

    render(){
        return(
            <>
                <input type="text" value={this.props.searchText} onChange={this.handleTextChange}/>
                <p>
                    <input type="checkbox" onChange={this.handleCheckChange}/>
                    <label htmlFor="a">Only show product in stock</label>
                </p>
            </>
        )
    }


}

export default SearchBar;