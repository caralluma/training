"use strict";

var React = require('react');// Reference to React Library
var AuthorApi = require('../../api/authorApi'); //Reference to AuthorAPI
var AuthorList = require('./authorList'); //Reference to AuthorList

var AuthorPage = React.createClass({
	getInitialState: function() {
		return {
			authors: []	//set authors to initial array
		};
	},

	componentDidMount: function() {
		if (this.isMounted()) {
			this.setState({ authors: AuthorApi.getAllAuthors() });
		}
	},

	render: function() {
		return (
			<div>
				<h1>Authors</h1>
				<AuthorList authors={this.state.authors} />
			</div>
		);
	}
});

module.exports = AuthorPage;