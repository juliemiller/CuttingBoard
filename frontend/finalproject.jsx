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
var CategoryStore = require('./stores/category_store');
var Modal = require('react-bootstrap').Modal;
var CategoryForm = require('./components/category/category_form');

var App = React.createClass({
	getInitialState: function() {
		return { current_user: UserStore.getUser(), showModal: false };
	},

	componentDidMount: function() {
		UserStore.addListener(this._onChange);
		CategoryStore.addListener(this._onChange);
		ApiUtil.fetchFollowedCategories();
		ApiUtil.getCurrentUser();
		ApiUtil.fetchFilteredRecipes();
	},

	_onChange: function() {
		var showCategoryModal = false;
		if (CategoryStore.followedCategories().length === 0) {
			showCategoryModal = true;
		};

		this.setState({ current_user: UserStore.getUser(), showModal: showCategoryModal });
	},

	openCategoryForm: function() {
		this.setState({ showModal: true });
	},

	closeCategoryForm: function() {
		this.setState({ showModal: false });
	},

	render: function() {
		return (
			<div className="container-fluid app">
				<NavBar current_user={this.state.current_user}/>
				{this.props.children && React.cloneElement(this.props.children, { 
					current_user: this.state.current_user
				})}
				<Modal show={this.state.showModal}>
				<Modal.Header>
					<Modal.Title>Select Topics to Follow</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<CategoryForm modalCallback={this.closeCategoryForm}/>
				</Modal.Body>
			</Modal>
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
		