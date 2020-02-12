import React from 'react';
import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Control from "./components/Control";

class App extends React.Component{

    constructor(props){
        super(props);
        // UI에 영향을 줄 일이 없으므로 state에서 제외

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
        this.max_content_id = Math.max.apply(Math, this.state.contents.map(function(o) {
            return o.id + 1;
        }.bind(this)));

    }
    // render(): 어떤 함수가 호출될 것인가
    render() {
        let _title, _desc, _article = null;
        if(this.state.mode === 'welcome'){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc}/>
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
            _article = <ReadContent title={_title} desc={_desc}/>
        }else if(this.state.mode === 'create'){
            _article = <CreateContent
                onSubmit={function(_title, _desc){
                    // add content to this.state.contents
                    console.log(arguments);
                    // {id:this.max_content_id, title:_title, desc:_desc}
                    const contents = this.state.contents.concat({id:this.max_content_id++, title:_title, desc:_desc});
                    this.setState({contents:contents})

                    // TODO [].concat >> concat은 원본 배열은 수정되지 않고 복사본을 리턴함

                }.bind(this)}
            />
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
                <Control
                    onChangeMode={function(mode){
                        this.setState({mode:mode})
                    }.bind(this)}
                />
                {_article}
            </div>
        )
    }
}

export default App;
