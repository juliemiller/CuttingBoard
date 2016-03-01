var React = require('react');
var History = require('react-router').History;
var NavBarSearch = require('./navbar_search');
var UserStore = require('../stores/user_store');
var ApiUtil = require('../util/api_util');

var NavBar = React.createClass({
	mixins: [History],

	renderBoardsIndex: function() {
		this.history.push("/boards");
	},

	goToRoot: function() {
		this.history.push("/");
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
			      <form className="navbar-form navbar-left" role="search">
			        <div className="form-group">
			          <input type="text" className="form-control" placeholder="Search"/>
			        </div>
			        <button type="submit" className="btn btn-default">Submit</button>
			      </form>
						<button className="btn btn-primary navbar-btn pull-right" onClick={this.renderBoardsIndex}>{name}</button>
			      
			    </div>
			  </div>
			</nav>
			</div>
		)
	}
});

module.exports = NavBar;
