import './App.css';
import { Component } from 'react';
import Myheader from './components/Myheader';
import ReadArticle from './components/ReadArticle';
import Nav from './components/Nav';
import Controls from './components/Controls';
import CreateArticle from './components/CreateArticle';
import UpdateArticle from './components/UpdateArticle';

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
  getReadArticle(){
    let result;
    // forEach 버전
    this.state.menus.forEach((item)=>{
      if(item.id === this.state.selected_id){
        result = item;
      }
    });
    return result;

    // while 버전
    // let i = 0;
    // while(i<this.state.menus.length){
    //   let data = this.state.menus[i];
    //   if(data.id === this.state.selected_id){
    //     _title = data.title;
    //     _desc = data.desc;
    //     break;
    //   }
    //   i++;
    // }

    // 반복되는 내용(while)
    // _title = this.state.menus[this.state.selected_id].title;
    // _desc = this.state.menus[this.state.selected_id].desc;
  }
  getArticle(){
    let _title, _desc, _article = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadArticle title={_title} desc={_desc} />
    }else if(this.state.mode === 'read'){
      let _data = this.getReadArticle();
      _article = <ReadArticle title={_data.title} desc={_data.desc} />

    }else if(this.state.mode === 'create'){
      _article = <CreateArticle onsubmit={(_title, _desc)=>{
        this.max_menu_id++;
        // push 대체 방법 1. concat
        // let _menus = this.state.menus.concat(
        //   {id: this.max_menu_id, title: _title, desc: _desc}
        // );
        
        // push 대체 방법 2. Array.from
        let newMenus = Array.from(this.state.menus);
        newMenus.push({id:this.max_menu_id, title: _title, desc: _desc});

        this.setState({
          // menus: _menus    // concat
          menus: newMenus     // Array.from
        });
        console.log(_title, _desc);
      }}/>;
    }else if(this.state.mode === 'update'){
      let _content = this.getReadArticle();
      _article = <UpdateArticle data={_content} onsubmit={(_id, _title, _desc)=>{
        console.log(_id, _title, _desc);

        let _menus = Array.from(this.state.menus);

        _menus.forEach((item, idx)=>{
          if(item.id === _id){
            _menus[idx] = {id: _id, title: _title, desc: _desc};
          }
        });
        this.setState({
          menus: _menus,
          mode: 'read'
        })
      }} />
    }else if(this.state.mode === 'delete'){
      _article = '<h2>delete</h2>';
    }
    return _article;
  }
  render(){
    console.log('App 실행')

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
        {/* {_article} */}
        {this.getArticle()}

        <Controls onChangeMode={(_mode)=>{
          if(_mode === 'delete'){
            if(window.confirm('정말 삭제할까요?')){
               let _menus = Array.from(this.state.menus);
               _menus.forEach((item, idx)=>{
                if(item.id === this.state.selected_id){
                  _menus.splice(idx,1);
                }
               });
               this.setState({
                menus: _menus,
                mode: 'welcome'
               });
            }
          }else{
            this.setState({
              mode: _mode
            })
          }
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