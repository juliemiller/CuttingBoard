var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var BoardHome = require('./components/board/board_home');
var BoardIndexItemDetail = require('./components/board/board_index_item_detail');
var BoardForm = require('./components/board/board_form');
var NavBar = require('./components/navbar');
var UserForm = require('./components/user/user_form');

var App = React.createClass({
	render: function() {
		return (
			<div className="container-fluid">
				<NavBar />
				{this.props.children}
			</div>		
		)
	}
});

var routes = (
	<Route path="/" component={App}>
		<Route path="boards" component={BoardHome}>
			<Route path="editProfile" component={UserForm} />
		</Route>
		<Route path="boards/:boardId" component={BoardIndexItemDetail}>
			// <Route path="edit" component={BoardForm}/>
		</ Route>
	</ Route>
	)

document.addEventListener("DOMContentLoaded", function() {
	ReactDOM.render(<Router>{routes}</Router>, document.getElementById("content"))});
		



	// <Route path="newBoard" component={BoardForm} />
