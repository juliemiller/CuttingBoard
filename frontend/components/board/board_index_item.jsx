var React = require('react');

var BoardIndexItem = React.createClass({
	render: function() {
		return (
			<div>{this.props.board.title} </div>
		)
	}
});

module.exports = BoardIndexItem;