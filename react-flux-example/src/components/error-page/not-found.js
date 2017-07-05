'use strict';
import React from "react";
import {Link} from "react-router";
import PropTypes from "prop-types";

class PageNotFound extends React.Component {
    render() {
        return (
            <div>
                <h2>Oops! Page Not Found</h2>
                <h4>The URL you have requested for
                    <b>&#34;{this.props.location.pathname}&#34;</b> is not found</h4>

                <h5>The possible reasons would be as follows:</h5>
                <ul>
                    <li><h5>The page does not exist</h5></li>
                    <li><h5>The Page would be under maintenance or coming soon.</h5></li>
                </ul>
                <h5>Thanks for your patience.</h5>
                <p>Click here to go <Link to="/">Back to Home</Link></p>
            </div>
        );
    }
}
PageNotFound.propTypes = {
    location: PropTypes.string.isRequired
};
export default PageNotFound;
