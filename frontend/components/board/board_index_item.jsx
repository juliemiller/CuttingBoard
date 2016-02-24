var React = require('react');
var History = require('react-router').History;

var BoardIndexItem = React.createClass({
	mixins: [History],

	renderBoard: function() {
		debugger;
		this.history.push("boards/" + this.props.board.id);
	},

	render: function() {
		return (
			<div className="board-box" onClick={this.renderBoard}>{this.props.board.title}  </div>
		)
	}
});

module.exports = BoardIndexItem;