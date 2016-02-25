var React = require('react');
var History = require('react-router').History;

var BoardIndexItem = React.createClass({
	mixins: [History],

	renderBoard: function() {
		this.history.push("boards/" + this.props.board.id);
	},

	render: function() {
		return (
			<div className="col-md-3" onClick={this.renderBoard}>
				<section className="board">{this.props.board.title}</section> 
			</div>
		)
	}
});

module.exports = BoardIndexItem;