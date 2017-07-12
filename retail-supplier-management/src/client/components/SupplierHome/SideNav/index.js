import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-toolbox/lib/button';
//import SideNavStyles from './sideNav.css';

class Sidebar extends Component {
    render () {
        return (
            <div >
                <Link to='/'>
                    <Button icon='bookmark' label='Dashboard' accent style={{'color': '#c03645'}}/>
                </Link>
                <Link to='/products'>
                    <Button icon='bookmark' label='Products' accent style={{'color': '#c03645'}}/>
                </Link>
                <Link to='/quote'>
                    <Button icon='bookmark' label='Quote' accent style={{'color': '#c03645'}} />
                </Link>
            </div>
        );
    }
}

export default Sidebar;

