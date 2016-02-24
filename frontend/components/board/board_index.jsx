var React = require('react');
var BoardStore = require('../../stores/board_store');
var ApiUtil = require('../../util/api_util');
var BoardIndexItem = require('./board_index_item');
var BoardForm = require('./board_form');

var BoardIndex = React.createClass( {
	getInitialState: function() {
		return { boards: BoardStore.all() };
	},

	componentDidMount: function() {
		this.storeListener = BoardStore.addListener(this._onChange);
		ApiUtil.fetchBoards();
	},

	componentWillUnmount: function() {
		this.storeListener.remove();
	},

	_onChange: function() {
		this.setState({ boards: BoardStore.all() });
	},

	render: function() {
		return (
			<div>
				<BoardForm /> 
				{
					this.state.boards.map(function(board) {
						return <BoardIndexItem board={board} key={board.id} />
					})
				}
			</div>
		)
	}
});

module.exports = BoardIndex;