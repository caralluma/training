import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from "react-router";

export default class Menu extends Component {
    render() {
        return (
            <div>
                <div>
                    <div><Link to="/">Inbox</Link></div>
                    <div><Link to="sent">Sent</Link></div>
                    <div><Link to="trash">Trash</Link></div>
                </div>
            </div>
        )
    }
}
