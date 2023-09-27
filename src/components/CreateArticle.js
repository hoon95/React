import { Component } from 'react';

export default class CreateArticle extends Component {
  render() {
    return (
        <div>
            <h2>Create Article</h2>
            <form action='/create_process' method='POST' onSubmit={(e)=>{
                e.preventDefault();
                console.log(e.target.title.value);

                let title = e.target.title.value;
                let desc = e.target.title.desc;
                this.props.onsubmit(title, desc);
            }}>
                <p>
                   <label htmlFor='title'>Title:</label> 
                   <input type='text' name='title' placeholder='title' id='title' />
                </p>
                <p>
                    <label htmlFor='desc'>Description: </label>
                    <textarea id='desc' name='desc' placeholder='description'></textarea>
                </p>
                <button>Submit</button>
            </form>
        </div>
    )
  }
}