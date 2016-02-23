var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var BoardIndex

var App = React.createClass({
	render: function() {
		return (
			<div>
				<header> WELCOME </header>
				{this.props.children}
			</div>		
		)
	}
});

var routes = (
	<Route path="/" component={App}>
		<Route path="boards" component={BoardIndex} />
	</ Route>
	)

document.addEventListener("DOMContentLoaded", function() {
	ReactDOM.render(<Router>{routes}</Router>, document.getElementById("content"))});
