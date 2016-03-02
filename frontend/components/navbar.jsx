var React = require('react');
var History = require('react-router').History;
var NavBarSearch = require('./navbar_search');
var UserStore = require('../stores/user_store');
var ApiUtil = require('../util/api_util');
var CategoryStore = require('../stores/category_store');

var NavBar = React.createClass({
	mixins: [History],

	getInitialState: function() {
		return { categories: CategoryStore.all() }
	},

	componentDidMount: function() {
		this.categoryListener = CategoryStore.addListener(this._onChange);
		ApiUtil.fetchCategories();
	},

	componentWillUnmount: function() {
		this.categoryListener.remove();
	},

	_onChange: function() {
		this.setState( { categories: CategoryStore.all() })
	},

	renderBoardsIndex: function() {
		this.history.push("/boards");
	},

	goToRoot: function() {
		ApiUtil.fetchFilteredRecipes("all");
		this.history.push("/");
	},

	logOutUser: function() {
		ApiUtil.logoutUser();
		window.location.reload();
	},

	render: function() {
		var name = "";
		if (this.props.current_user) {
			name = this.props.current_user.firstname + " " + this.props.current_user.lastname;
		}

		return (
			<div className="container-fluid">
			 <nav className="navbar navbar-fixed-top navbar-default" role="navigation">
			  <div className="container-fluid">
			    <div className="collapse navbar-collapse">
	 				<button className="btn navbar-btn pull-left btn-primary" onClick={this.goToRoot}>Home</button> 
			        <NavBarSearch categories={this.state.categories} />
			      <div className="btn-group pull-right">
							<button className="btn btn-primary navbar-btn" onClick={this.renderBoardsIndex}>My Boards</button>
							<button className="btn btn-primary navbar-btn" onClick={this.logOutUser}>Logout</button>
						</div>			      
			    </div>
			  </div>
			</nav>
			</div>
		)
	}
});

module.exports = NavBar;
