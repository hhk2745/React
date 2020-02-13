import React from 'react';

class CreateContent extends React.Component{
    render(){
        const {onSubmit} = this.props;
        return(
            <article>
                <h2>Create</h2>
                <form
                    action="/create_process"
                    method="post"
                    onSubmit={function(e){
                        const title = e.target.title.value;
                        const desc = e.target.desc.value;
                        e.preventDefault();
                        onSubmit(title, desc);
                    }.bind(this)}
                >
                    <p>
                        <input type="text" name="title" placeholder="title"/>
                    </p>
                    <p>
                        <textarea name="desc" placeholder="description"/>
                    </p>
                    <p>
                        <input type="submit" value="create!"/>
                    </p>
                </form>
            </article>
        )
    }
}
export default CreateContent;