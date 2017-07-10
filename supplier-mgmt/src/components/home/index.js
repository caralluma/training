import React from "react"
import Header from "./header"
import Sidebar from "./sidebar"
import Main from "./content"
import {Layout, Flex, Fixed} from "react-layout-pane"
import { BrowserRouter } from 'react-router-dom'
import layoutStyles from './layout.css'

export default class Home extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout type="column">
                    <Fixed className={layoutStyles.header}><Header/></Fixed>
                    <Flex>
                        <Layout type="row">
                            <Fixed className={layoutStyles.sidebar}><Sidebar/></Fixed>
                            <Flex className={layoutStyles.content}><Main/></Flex>
                        </Layout>
                    </Flex>
                </Layout>
            </BrowserRouter>
        )
    }
}




