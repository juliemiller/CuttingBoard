var React = require('react');
var BoardStore = require('../../stores/board_store');
var ApiUtil = require('../../util/api_util');
var BoardIndexItem = require('./board_index_item');
var BoardForm = require('./board_form');
var BoardNavBar = require('./board_navbar');
var BoardNavBarTabs = require('./board_navbar_tabs');
var History = require('react-router').History;

var BoardIndex = React.createClass( {
	mixins: [History],
	
	getInitialState: function() {
		return { public_boards: BoardStore.all().public, private_boards: BoardStore.all().private };
	},

	componentDidMount: function() {
		this.storeListener = BoardStore.addListener(this._onChange);
		ApiUtil.fetchBoards();
	},

	componentWillUnmount: function() {
		this.storeListener.remove();
	},

	_onChange: function() {
		var boards = BoardStore.all();
		this.setState({ public_boards: boards.public, private_boards: boards.private });
	},

	openNewBoardForm: function() {
		this.history.push("boards/newBoard")
	},

	render: function() {

		return (
			<div>

				<div className="board-box" onClick={this.openNewBoardForm}>Create Board</div> 
				{
					this.state.public_boards.map(function(board) {
						return <BoardIndexItem board={board} key={board.id} />
					})
				}
				<p>Private Boards</p>
				{
					this.state.private_boards.map(function(board) {
						return <BoardIndexItem board={board} key={board.id} />
					})
				}
			{this.props.children}
			</div>

		)
	}
});

module.exports = BoardIndex;