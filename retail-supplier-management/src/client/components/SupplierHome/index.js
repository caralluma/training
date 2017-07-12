import React, {Component} from 'react';
import AppHeader from '../AppHeader';
import Sidebar from './SideNav';
import Main from './content';
import {Layout, Flex, Fixed} from 'react-layout-pane';
import {BrowserRouter} from 'react-router-dom';
import layoutStyles from './layout.css';

class SupplierHome extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout type='column'>
                    <Fixed className={layoutStyles.header}><AppHeader>
                        Supplier Management
                    </AppHeader></Fixed>
                    <Flex>
                        <Layout type="row">
                            <Fixed className={layoutStyles.sidebar}><Sidebar/></Fixed>
                            <Flex className={layoutStyles.content}><Main/></Flex>
                        </Layout>
                    </Flex>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default SupplierHome;

