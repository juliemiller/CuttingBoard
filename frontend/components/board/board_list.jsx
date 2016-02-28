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
		console.log(boardId);
		console.log(this.props.recipeId);
		ApiUtil.createPin(boardId, this.props.recipe.id);
		this.props.modalCallback();
	},

	render: function() {
		var that = this;
		return (
			<div className="boardList">
				<ul className="boardListItems">
				{
						this.state.boards.map(function(board) {
							return (
								<li key={board.id} className="pinBoard">
									 <span >{board.title}</span>
									<button className="pinBoardButton" onClick={function(){ that.pinToBoard(board.id)} }>Pin</button>
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