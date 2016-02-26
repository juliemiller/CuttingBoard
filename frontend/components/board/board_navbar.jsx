var React = require('react');

BoardNavBar = React.createClass({
	render: function() {
		var name = "";
		if (this.props.current_user) {
			name = this.props.current_user.user;
		}
		return (
			<div className="board-userInfo">
				<div className="btn-toolbar pull-right">
					<button className="btn">Edit Profile</button>
					<button className="btn dropdown-toggle">⚙</button>
				</div>
				<div id="boardUsername">
					<h2>{name}</h2>
				</div>
			</div>
		)
	}
});

module.exports = BoardNavBar;