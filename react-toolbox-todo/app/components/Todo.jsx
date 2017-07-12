import React, { Component } from 'react';
import Board from './Board.jsx';
import { ListItem } from 'react-toolbox/lib/list';


export default class Todo extends Component {
  dialogToggle() {
    console.log('test');
  }
  render() {
    return (
      <ListItem ripple
        caption={this.props.todo.title}
        checked={this.props.todo.completed}
        legend={this.props.todo.text}
        onClick={this.props.onClick}
      />
    )
  }

}
