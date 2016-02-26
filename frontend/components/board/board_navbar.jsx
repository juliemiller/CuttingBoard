var React = require('react');

BoardNavBar = React.createClass({
	render: function() {
		return (
			<div className="board-userInfo">
				<button className="btn pull-right">Edit Profile</button>
				<h2> USER NAME </h2>
			</div>
		)
	}
});

module.exports = BoardNavBar;