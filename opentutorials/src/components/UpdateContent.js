import React from 'react';

class UpdateContent extends React.Component{
    constructor(props){
        super(props);
        const {data} = this.props;

        this.state = {
            id:data.id,
            title:data.title,
            desc:data.desc
        }

    }
    inputFormHandler = (e) => {
        // ['state_name':value]
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        const {onSubmit, onChange, data} = this.props;
        return(
            <article>
                <h2>Update</h2>
                <form
                    action="/update_process"
                    method="post"
                    onSubmit={function(e){
                        const id = this.state.id;
                        const title = this.state.title;
                        const desc = this.state.desc;
                        e.preventDefault();
                        onSubmit(id, title, desc);
                    }.bind(this)}
                >
                    <input type="hidden" name="id" value={this.state.id}/>
                    <p>
                        <input
                            type="text"
                            name="title"
                            placeholder="title"
                            value={this.state.title}
                            onChange={this.inputFormHandler}
                        />
                    </p>
                    <p>
                        <textarea
                            name="desc"
                            placeholder="description"
                            value={this.state.desc}
                            onChange={this.inputFormHandler}
                        />
                    </p>
                    <p>
                        <input type="submit" value="create!"/>
                    </p>
                </form>
            </article>
        )
    }

}
export default UpdateContent;