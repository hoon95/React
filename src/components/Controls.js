import { Component } from 'react';

export default class Controls extends Component {
  render() {
    return (
        <nav>
            <ul className='menu'>
                <li><a href='/create' onClick={(e)=>{
                  e.preventDefault();
                  this.props.onChangeMode('create');
                }}>Create</a></li>
                <li><a href='/update' onClick={(e)=>{
                  e.preventDefault();
                  this.props.onChangeMode('update');
                }}>Update</a></li>
                <li><input type='button' value='delete' onClick={(e)=>{
                  e.preventDefault();
                  this.props.onChangeMode('delete');
                }}/></li>
            </ul>
        </nav>
    )
  }
}