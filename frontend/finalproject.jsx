var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var ApiUtil = require('./util/api_util');
var BoardHome = require('./components/board/board_home');
var BoardIndexItemDetail = require('./components/board/board_index_item_detail');
var BoardForm = require('./components/board/board_form');
var NavBar = require('./components/navbar');
var UserForm = require('./components/user/user_form');
var UserStore = require('./stores/user_store');
var RecipeHome = require('./components/recipe/recipe_home');

var App = React.createClass({
	getInitialState: function() {
		return { current_user: UserStore.getUser() };
	},

	componentDidMount: function() {
		UserStore.addListener(this._onChange);
		ApiUtil.getCurrentUser();
		ApiUtil.fetchFilteredRecipes();
	},

	_onChange: function() {
		this.setState({ current_user: UserStore.getUser()})
	},

	render: function() {
		return (
			<div className="container-fluid app">
				<NavBar current_user={this.state.current_user}/>
				{this.props.children && React.cloneElement(this.props.children, { 
					current_user: this.state.current_user
				})}
			</div>	
		)
	}
});

var routes = (
	<Route path="/" component={App}>
		<IndexRoute component={RecipeHome} />
		<Route path="boards" component={BoardHome}>
			<Route path="editProfile" component={UserForm} /></Route>
		<Route path="boards/:boardId" component={BoardIndexItemDetail}></ Route>
	</ Route>
	)

document.addEventListener("DOMContentLoaded", function() {
	ReactDOM.render(<Router>{routes}</Router>, document.getElementById("content"))});
		