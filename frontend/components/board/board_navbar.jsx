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

