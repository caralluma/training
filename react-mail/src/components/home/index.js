import React from "react"
import Header from "./header"
import Sidebar from "./sidebar"
import Main from "./main"
import {Layout, Flex, Fixed} from "react-layout-pane"
import { BrowserRouter } from 'react-router-dom'

export default class Home extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout type="column">
                    <Fixed className="header"><Header/></Fixed>
                    <Flex>
                        <Fixed className="header"><Sidebar/></Fixed>
                        <Layout type="row">
                            <Flex className="content"><Main/></Flex>
                        </Layout>
                    </Flex>
                </Layout>
            </BrowserRouter>
        )
    }
}




