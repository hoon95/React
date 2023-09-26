import { Component } from 'react';

class Nav extends Component{
    render(){
      console.log('Nav 실행')
      let lists = [];
      let data = this.props.data;
      let i = 0;
      while(i<data.length){
        lists.push(<li key={data[i].id}><a href="">{data[i].title}</a></li>);
        i++;
      }
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