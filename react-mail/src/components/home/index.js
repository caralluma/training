import React from "react"
import Header from "./header"
import Menu from "./menu"

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div style={{'float':'clear',display:'block'}}>
                    <div id="left_menu" style={{'float':'left'}}><Menu/></div>
                    <div id="content_div" style={{'float':'clear'}}>{this.props.children}</div>
                </div>
            </div>
        );
    }
}
