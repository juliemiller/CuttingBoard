var React = require('react');
var History = require('react-router').History;
var Modal = require('react-bootstrap').Modal;
var BoardForm = require('./board_form');

var BoardDetailNavBar = React.createClass({
	mixins: [History],

	getInitialState: function() {
		return { showModal: false };
	},

	renderEditForm: function() {
		this.history.push("boards/" + this.props.board.id + "/edit");
	},

	renderBoards: function() {
		this.history.push("boards/");
	},

	openEditBoardForm: function() {
		this.setState({ showModal: true });
	},

	closeEditBoardForm: function() {
		this.setState({ showModal: false });
	},

	render: function() {
		var boardId = "";
		if (this.props.board) {
			boardId = this.props.board.id;
		}
		return (
			<div className="navbar">
				<div className="boardDetailButtonNavBar">
					<button className="btn btn-primary navbar-btn pull-left" onClick={this.renderBoards}>Boards</button>
					<button className="btn btn-primary navbar-btn pull-right" onClick={this.openEditBoardForm}>Edit Board</button>
				</div>
				<Modal show={this.state.showModal} onHide={this.closeEditBoardForm}>
					<Modal.Header closeButton>
						<Modal.Title>Edit you board</Modal.Title>
					</Modal.Header>
					<Modal.Body className="container-fluid">
						<BoardForm boardId={boardId} modalCallback={this.closeEditBoardForm}/>
					</Modal.Body>
				</Modal>
			</div>
		)
	}
});

module.exports = BoardDetailNavBar;