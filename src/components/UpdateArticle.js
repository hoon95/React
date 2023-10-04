import { Component } from 'react';

export default class UpdateArticle extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc 
        }
    }
    inputFormHandler(e){
        this.setState({
            [e.target.name]: e.target.value      // Computed Property Name
        })
    }
    render() {
    console.log('UpdateArticle 실행');
    console.log(this.props.data);
    return (
        <div>
            <h2>Update Article</h2>
            <form action='/create_process' method='POST' onSubmit={(e)=>{
                e.preventDefault();

                let id = this.state.id;
                let title = this.state.title;
                let desc = this.state.desc;
                
                this.props.onsubmit(id, title, desc);
            }}>
                <p>
                    <label htmlFor='title'>Title:</label> 
                    <input type='text' name='title' placeholder='title' id='title' value={this.state.title} onChange={this.inputFormHandler.bind(this)} />
                </p>
                <p>
                    <label htmlFor='desc'>Description: </label>
                    <textarea id='desc' name='desc' placeholder='description' onChange={this.inputFormHandler.bind(this)}>{this.state.desc}</textarea>
                </p>
                <button>Submit</button>
            </form>
        </div>
    )
    }
}