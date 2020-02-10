import React from 'react';
import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            subject: {title:'WEB', sub:'world wide web'},
            contents:[
                {id:1, title:'HTML', desc:'HTML is for DOM'},
                {id:2, title:'CSS', desc:'CSS is for Style'},
                {id:3, title:'Javascript', desc:'Javascript is for interactive'}

            ]
        }
    }
    render() {
        return (
            <div className="App">
                <Subject title={this.state.subject.title} sub={this.state.subject.sub}/>
                <TOC data={this.state.contents}/>
                <Content title={"HTML"} desc={"Hello world"}/>
            </div>
        )
    }
}

export default App;
