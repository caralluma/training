'use strict';
import React from "react";

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <div>This application uses the following technologies
                    <ul className="list list-group">
                        <li className="list-group-item">React</li>
                        <li className="list-group-item">React router</li>
                        <li className="list-group-item">Flux</li>
                        <li className="list-group-item">Node</li>
                        <li className="list-group-item">Gulp</li>
                        <li className="list-group-item">Browserify</li>
                        <li className="list-group-item">Bootstrap</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default About;