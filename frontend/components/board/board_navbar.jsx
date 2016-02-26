var React = require('react');
var ApiUtil = require('../../util/api_util');

BoardNavBar = React.createClass({
	logoutUser: function() {
		ApiUtil.logoutUser();
	},

	render: function() {
		var name = "";
		if (this.props.current_user) {
			name = this.props.current_user.user;
		}
		return (


			<div className="board-userInfo">
				<div className="btn-toolbar pull-right">
					<button className="btn">Edit Profile</button>
					<div className="dropdown">
					  <button type="button" className="btn btn-default dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					  Settings <span className="caret"></span>
					  </button>
					  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
					    <li><a href="#">Logout</a></li>
					  </ul>
					</div>
				</div>
				<div id="boardUsername">
					<h2>{name}</h2>
				</div>
			</div>
		)
	}
});

module.exports = BoardNavBar;
