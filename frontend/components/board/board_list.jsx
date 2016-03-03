var React = require('react');
var BoardStore = require('../../stores/board_store');
var ApiUtil = require('../../util/api_util');

var BoardList = React.createClass({
	getInitialState: function() {
		var boardObject = BoardStore.all();
		var boards = boardObject.public.concat(boardObject.private);
		return { boards: boards }
	},

	componentDidMount: function() {
		this.boardListener = BoardStore.addListener(this._onChange);
		ApiUtil.fetchBoards();
	},

	_onChange: function() {
		var boardObject = BoardStore.all();
		var boards = boardObject.public.concat(boardObject.private);
		this.setState({ boards: boards });
	},

	componentWillUnmount: function() {
		this.boardListener.remove();
	},

	pinToBoard: function(boardId) {
		ApiUtil.createPin(boardId, this.props.recipe.id);
		this.props.modalCallback();
	},

	close: function() {
		this.props.modalCallback();
	},

	render: function() {
		var that = this;
		return (
			<div className="boardList">
				<button onClick={this.close} className="close">x</button>
				<h4 className="text-center">Pick a Board</h4>
				<ul className="boardListItems">
				{
						this.state.boards.map(function(board) {
							return (
								<li key={board.id} className="pinBoard">
									 <span >{board.title}</span>
									<button className="pinBoardButton btn btn-primary" onClick={function(){ that.pinToBoard(board.id)} }>Pin</button>
							</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
});

module.exports = BoardList;