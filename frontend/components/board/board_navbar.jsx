var React = require('react');
var ApiUtil = require('../../util/api_util');
var History = require('react-router').History;

BoardNavBar = React.createClass({
	mixins: [History],
	
	render: function() {
		var name = "";
		if (this.props.current_user) {
			name = this.props.current_user.firstname + " " + this.props.current_user.lastname;
		}
		return (
			<div className="board-userInfo">
				<div id="boardUsername">
					<h2 className="text-center">{name}</h2>
				</div>
			</div>
		)
	}
});

module.exports = BoardNavBar;


			// <div className="board-userInfo">
			// 	<div className="btn-toolbar profileOptions">
			// 		<button className="btn">Edit Profile</button>
			// 		<div className="dropdown">
			// 		  <button type="button" className="btn btn-default dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
			// 		  Settings <span className="caret"></span>
			// 		  </button>
			// 		  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
			// 		    <li onClick={this.logOutUser}><a>Logout</a></li>
			// 		  </ul>
			// 		</div>
			// 	</div>