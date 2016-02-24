var React = require('react');
var History = require('react-router').History;

var BoardDetailNavBar = React.createClass({
	mixins: [History],

	renderEditForm: function() {
		this.history.push("boards/" + this.props.board.id + "/edit");
	},

	renderBoards: function() {
		this.history.push("boards/");
	},

	render: function() {
		return (
			<div>
				<button onClick={this.renderBoards}>Boards</button>
				<button onClick={this.renderEditForm}>Edit Board</button>
			</div>
		)
	}
});

module.exports = BoardDetailNavBar;