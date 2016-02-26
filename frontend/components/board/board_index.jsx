var React = require('react');
var BoardStore = require('../../stores/board_store');
var ApiUtil = require('../../util/api_util');
var BoardIndexItem = require('./board_index_item');
var BoardForm = require('./board_form');
var BoardNavBar = require('./board_navbar');
var BoardNavBarTabs = require('./board_navbar_tabs');
var History = require('react-router').History;
var Modal = require('react-bootstrap').Modal;


var BoardIndex = React.createClass( {
	mixins: [History],
	
	getInitialState: function() {
		return { public_boards: BoardStore.all().public, private_boards: BoardStore.all().private, showModal: false };
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
		this.setState({ showModal: true });
	},

	closeNewBoardForm: function() {
		this.setState({ showModal: false });
	},

	render: function() {

		return (
			<div className="container">
				<div className="publicBoards row">
				<div className="col-md-3" onClick={this.openNewBoardForm}>
					<section className="board create">Create a Board <br/>
					</section>
					</div> 
				<Modal show={this.state.showModal} onHide={this.closeNewBoardForm}>
					<Modal.Header closeButton>
						<Modal.Title>Create a Board</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<BoardForm boardId="" modalCallback={this.closeNewBoardForm}/>
					</Modal.Body>
				</Modal>
				{
					this.state.public_boards.map(function(board) {
						return <BoardIndexItem board={board} key={board.id} />
					})
				}
				</div>
				<div className="privateBoards row">
				<p>Private Boards</p> 
					{
						this.state.private_boards.map(function(board) {
							return <BoardIndexItem board={board} key={board.id} />
						})
					}
				</div>
			{this.props.children}
			</div>

		)
	}
});

module.exports = BoardIndex;