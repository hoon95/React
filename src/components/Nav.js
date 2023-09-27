import { Component } from 'react';

class Nav extends Component{
    render(){
      console.log('Nav 실행')
      let lists = [];
      let data = this.props.data;
      // let $this = this.props;
      data.forEach((item, index)=>{
         lists.push(<li key={index}><a href="/" data-id={item.id} onClick = {(e)=>{
          e.preventDefault();
          // this.props.onChangePage(e.target.dataset.id);
          this.props.onChangePage(item.id);
        }}
        >{item.title}</a></li>)
      })
      return(
        <nav>
          <ul>
              {/* <li><a href="">HTML</a></li>
              <li><a href="">CSS</a></li>
              <li><a href="">JavaScript</a></li> */}
              {lists}
          </ul>
        </nav>
      )
    }
  }

export default Nav;