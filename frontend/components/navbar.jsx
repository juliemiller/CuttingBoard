var React = require('react');
var History = require('react-router').History;
var NavBarSearch = require('./navbar_search');

var NavBar = React.createClass({
	mixins: [History],

	renderBoardsIndex: function() {
		this.history.push("/boards");
	},

	goToRoot: function() {
		this.history.push("/");
	},

	render: function() {
		return (
			<header >
				<nav className="navbar navbar-fixed-top navbar-form navbar-default">
					<div className="container">
					<div className="navbar-header">
							<button id="homeButton" onClick={this.goToRoot}>Home</button> 
							<div className="form-group">
								<NavBarSearch />
							</div>
							<button id="boardButton" onClick={this.renderBoardsIndex}>Boards</button>
						</div>
					</div>
				</nav>
			</header>
		)
	}
});

module.exports = NavBar;