var React = require('react');

BoardNavBar = React.createClass({
	render: function() {
		return (
			<div className="board-userInfo">
				<button>Edit Profile</button>
				<h2> USER NAME </h2>
			</div>
		)
	}
});

module.exports = BoardNavBar;