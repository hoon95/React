import './App.css';
import { Component } from 'react';
import Myheader from './components/Myheader';
import ReadArticle from './components/ReadArticle';
import Nav from './components/Nav';
import Controls from './components/Controls';
import CreateArticle from './components/CreateArticle';

class App extends Component{
  constructor(props){
    super(props);
    this.max_menu_id = 3;
    this.state = {
      mode: 'welcome',
      selected_id: 0,
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
    let _title, _desc, _article = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadArticle title={_title} desc={_desc} />
    }else if(this.state.mode === 'read'){
      /*
      while 반복문 활용
      초기 값 i = 0
      this.state.menus의 값으로 반복문
      반복 할 일
        - 변수명 data에 this.state.menus의 각 값을 할당
        - if (data의 id값 = selected_id값){
          변수명 _title에 data.title 저장
          변수명 _desc에 data.desc 저장
        }
      */
      let i = 0;
      while(i<this.state.menus.length){
        let data = this.state.menus[i];
        if(data.id === this.state.selected_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
      // _title = this.state.menus[this.state.selected_id].title;
      // _desc = this.state.menus[this.state.selected_id].desc;
      _article = <ReadArticle title={_title} desc={_desc} />

    }else if(this.state.mode === 'create'){
      _article = <CreateArticle onsubmit={(_title, _desc)=>{
        this.max_menu_id++;
        let _menus = this.state.menus.concat(
          {id: this.max_menu_id, title: _title, desc: _desc}
        );
        this.setState({
          menus: _menus
        });
        console.log(_title, _desc);
      }}/>;
    }else if(this.state.mode === 'update'){
      _article = '<h2>update</h2>';
    }else if(this.state.mode === 'delete'){
      _article = '<h2>delete</h2>';
    }
    return(
      <div className="App content">
        <Myheader
          title = {this.state.subject.title}
          desc = {this.state.subject.desc}
          onChangePage = {()=>{
            this.setState({mode: 'welcome'});
          }}
          />
        <Nav data={this.state.menus} onChangePage = {(id)=>{
          console.log(id);
          this.setState({mode: 'read', selected_id: Number(id)})
        }}/>
        {/* <Myarticle title={_title} desc={_desc} /> */}
        {_article}
        <Controls onChangeMode={(_mode)=>{
          this.setState({
            mode: _mode
          })
        }} />
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