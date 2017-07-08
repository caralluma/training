import React from "react"
import Inbox from "../inbox";
import Sent from "../sent";
import Trash from "../trash";
import {Route, Switch} from 'react-router-dom'

export default class Home extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Inbox}/>
                    <Route path='/sent' component={Sent}/>
                    <Route path='/trash' component={Trash}/>
                </Switch>
            </main>)
    }
}