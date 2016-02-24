var React = require('react');
var BoardStore = require('../../stores/board_store');
var ApiUtil = require('../../util/api_util');
var BoardIndexItem = require('./board_index_item');
var BoardForm = require('./board_form');
var BoardNavBar = require('./board_navbar');
var BoardNavBarTabs = require('./board_navbar_tabs');

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

	openNewBoardForm: function() {
		this.props.history.push("boards/newBoard")
	},

	render: function() {
		var tabs = ["Boards", "Pins", "Followed Topics"];

		return (
			<div>
				<BoardNavBar />
				<BoardNavBarTabs tabs={tabs}/>
				<div className="board-box" onClick={this.openNewBoardForm}>Create Board</div> 
				{
					this.state.boards.map(function(board) {
						return <BoardIndexItem board={board} key={board.id} />
					})
				}
			{this.props.children}
			</div>

		)
	}
});

module.exports = BoardIndex;