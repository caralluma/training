import React from 'react';
import PropTypes from 'prop-types';
import { AppBar } from 'react-toolbox/lib/app_bar';
import Logo from '../Logo';
import theme from './PurpleAppBar.css';

const AppHeader = ({ children, ...other }) => (
  <AppBar {...other} theme={theme}>
    <Logo />
    {children}
  </AppBar>
);

AppHeader.propTypes = {
    children: PropTypes.node
};

export default AppHeader;

