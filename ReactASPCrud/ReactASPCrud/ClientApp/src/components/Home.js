import React, { Component } from 'react';
import TodoList from './TodoList';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div style={{textAlign:"center"}}>
        <TodoList />
      </div>
    );
  }
}
