var React = require('react');
var BoardStore = require('../../stores/board_store');
var ApiUtil = require('../../util/api_util');
var Modal = require('react-bootstrap').Modal;
var BoardForm = require('./board_form');
var UserStore = require('../../stores/user_store');

var BoardList = React.createClass({
	getInitialState: function() {
		var boardObject = BoardStore.all();
		var boards = boardObject.public.concat(boardObject.private);
		return { boards: boards, newBoardModal: false, userRecipes: UserStore.userRecipes() }
	},

	componentDidMount: function() {
		this.userRecipeListener = UserStore.addListener(this._onRecipeChange);
		this.boardListener = BoardStore.addListener(this._onChange);
		ApiUtil.fetchBoards();
	},

	_onChange: function() {
		var boardObject = BoardStore.all();
		var boards = boardObject.public.concat(boardObject.private);
		this.setState({ boards: boards });
	},

	_onRecipeChange: function() {
		this.setState({ userRecipes: UserStore.userRecipes() })
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

	createBoard: function() {
		this.setState( { newBoardModal: true })
	},

	closeNewBoardForm: function() {
		this.setState( { newBoardModal: false })
	},


	render: function() {
		var that = this;
		var noBoards;
		var alreadyPinned;
		if(this.state.userRecipes.indexOf(this.props.recipe.id) !== -1) {
			alreadyPinned = <span>recipe already pinned</span>
		}
		if (this.state.boards.length === 0) {
			noBoards = <span className="noBoardMessage">You don't have any boards yet. <button className="btn btn-primary" onClick={this.createBoard}> Create a board</button></span>
		}

		return (
			<div className="boardList">
				<button onClick={this.close} className="close">x</button>
				<h4 className="text-center">Pick a Board</h4>
				{noBoards}
				<ul className="boardListItems">
				{
						this.state.boards.map(function(board) {
							return (
								<li key={board.id} className="pinBoard">
									 <span className="pinBoardTitle">{board.title}</span>
									<button className="pinBoardButton btn btn-primary" onClick={function(){ that.pinToBoard(board.id)} }>Pin</button>
							</li>
							)
						})
					}
				</ul>
				<Modal show={this.state.newBoardModal} onHide={this.closeNewBoardForm}>
					<Modal.Header closeButton>
						<Modal.Title>Create a Board</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<BoardForm boardId="" modalCallback={this.closeNewBoardForm} pinning={true}/>
					</Modal.Body>
				</Modal>
			</div>
		)
	}
});

module.exports = BoardList;