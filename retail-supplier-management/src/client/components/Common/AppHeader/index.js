import React from 'react';
import PropTypes from 'prop-types';
import { AppBar } from 'react-toolbox/lib/app_bar';
import Logo from '../Logo/index';
import appHeaderStyles from './appHeader.css';

const AppHeader = ({ children, ...other }) => (
  <AppBar {...other} theme={appHeaderStyles}>
    <Logo />
    {children}
  </AppBar>
);

AppHeader.propTypes = {
    children: PropTypes.node
};

export default AppHeader;

