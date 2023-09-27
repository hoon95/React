import './App.css';
import { Component } from 'react';
import Myheader from './components/Myheader';
import Myarticle from './components/MyArticle';
import Nav from './components/Nav';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode: 'read',
      subject : {
        title : 'react',
        desc : 'Single Page Application'
      },
      welcome : {
        title : 'Welcome',
        desc : 'Welcome to react'
      },
      menus : [
        {id: 1, title: 'HTML', desc: 'HyperText Markup Language'},
        {id: 2, title: 'CSS', desc: 'CSS is for design'},
        {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'}
      ]
    }
  }

  render(){
    console.log('App 실행')
    let _title, _desc = null;

    if(this.state.mode == 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode == 'read'){
      _title = this.state.menus[0].title;
      _desc = this.state.menus[0].desc;      
    }
    return(
      <div className="App content">
        {/* <Myheader></Myheader> */}
        {/* <Myheader title={this.state.subject.title} desc={this.state.subject.desc} /> */}
        <header>
          <h1 className="logo"><a href='/' onClick={e=>{
            e.preventDefault();
            // this.state.mode = 'welcome';
            this.setState({
              mode: 'welcome'
            });
          }}>{this.state.subject.title}</a></h1>
          {/* <h1 className="logo"><a href='/' onClick={function(e){
            e.preventDefault();
            this.setState({
              mode: 'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1> */}
          <p>{this.state.subject.desc}</p>
        </header>
        <Nav data={this.state.menus} />
        <Myarticle title={_title} desc={_desc} />
     </div>
    )
  }
}

// export default class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello World!</h1>
//       </div>
//     )
//   }
// }

export default App;