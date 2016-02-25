var React = require('react');
var BoardStore = require('../../stores/board_store');
var BoardDetailNavBar = require('./board_detail_navbar');
var ApiUtil = require('../../util/api_util');

var BoardIndexItemDetail = React.createClass({
	getInitialState: function() {
		this.id = parseInt(this.props.params.boardId);
		return { board: BoardStore.find(this.id)};
	},

	componentDidMount: function() {
		this.boardListener = BoardStore.addListener(this._onChange);
		ApiUtil.fetchSingleBoard(this.id);
		this.setState({ board: BoardStore.find(this.id) });
	},

	componentWillUnmount: function() {
		this.boardListener.remove();
	},

	componentWillReceiveProps: function(newProps) {
		var boardId = newProps.params.boardId;
		ApiUtil.fetchSingleBoard(boardId);
		var board = BoardStore.find(boardId);
		this.setState( { board: board });
	},

	_onChange: function() {
		var id = parseInt(this.props.params.boardId);
		this.setState({ board: BoardStore.find(id)})
	},

	render: function() {
		var displayBoard = "";
		if (this.state.board) {
			displayBoard= this.state.board;
		}
		return (
			<div className="boardDetailTitle">
				<h2>{displayBoard.title}</h2>
				<p>{displayBoard.description}</p>
				<BoardDetailNavBar board={this.state.board}/>
				{this.props.children}
			</div>
		)
	}
});

module.exports = BoardIndexItemDetail;