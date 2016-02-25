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
			<header className="navBar">
				<button id="homeButton" onClick={this.goToRoot}>Home</button> 
				<NavBarSearch />
				<button id="boardButton" onClick={this.renderBoardsIndex}>Boards</button>
			</header>
		)
	}
});

module.exports = NavBar;