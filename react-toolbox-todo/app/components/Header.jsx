import React, { Component } from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import Logo from './Logo.jsx';
import theme from './Header.scss';

export default class CustomAppBar extends Component {
  render() {
    return (
      <AppBar theme={theme}>
        <Logo /> Todo App - React Toolbox
        {this.props.children}
      </AppBar>
    )
  }
}
