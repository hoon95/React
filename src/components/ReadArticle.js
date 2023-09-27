import { Component } from 'react';

class ReadArticle extends Component{
    render(){
      console.log('ReadArticle 실행')
      return(
        <article>
          <h2>{this.props.title}</h2>
          <p>{this.props.desc}</p>
        </article>
      )
    }
  }


export default ReadArticle;