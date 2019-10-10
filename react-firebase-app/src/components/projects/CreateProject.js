import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        'title' :'',
        'content' : ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("form input : ",this.state);
    }
    render() {
        return (
            <div className= "container">
                <form onSubmit= {this.handleSubmit} className= "white">
                    <h5 className= "grey-text text-darken-3">Create Project</h5>
                    <div className= "input-field">
                        <label htmlFor= "title">Project Title</label>
                        <input type= "text" name= "title" onChange= {this.handleChange}/>
                    </div>
                    <div className= "input-field">
                        <label htmlFor= "content">content</label>
                        <textarea name= "content" className= "materialize-textarea" onChange= {this.handleChange}></textarea>
                    </div>
                    <div className= "input-field">
                        <button className= "btn pink lighten-1 z-depth-0">Create Project</button>
                    </div>
                </form>
                
            </div>
        )
    }
}


export default CreateProject;
