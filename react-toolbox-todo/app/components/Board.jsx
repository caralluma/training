import React, { Component } from 'react';
import style from './Board.scss';

export default class Board extends Component {
  render() {
    return (
      <div className={style.board}>
        <label>{this.props.title}</label>
          {this.props.children}
      </div>
    )
  }

}
