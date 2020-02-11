import React from 'react';
import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mode:'welcome',
            selected_content_id:2,
            welcome:{title:'Welcome', desc:'Hello, React!!'},
            subject: {title:'WEB', sub:'world wide web'},
            contents:[
                {id:1, title:'HTML', desc:'HTML is for DOM'},
                {id:2, title:'CSS', desc:'CSS is for Style'},
                {id:3, title:'Javascript', desc:'Javascript is for interactive'}

            ]
        }
    }
    // render(): 어떤 함수가 호출될 것인가
    render() {
        let _title, _desc = null;
        if(this.state.mode === 'welcome'){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        }else if(this.state.mode === 'read'){
            let i = 0;
            while(i<this.state.contents.length){
                let data = this.state.contents[i];
                if(data.id === this.state.selected_content_id){
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
                i++;
            }
        }
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={()=>{
                        this.setState({mode:'welcome'})
                    }}
                />
                <TOC
                    onChangePage={(id)=>{
                        this.setState({
                            mode:'read',
                            selected_content_id:Number(id)
                        })
                    }}
                    data={this.state.contents}
                />
                <Content title={_title} desc={_desc}/>
            </div>
        )
    }
}

export default App;
