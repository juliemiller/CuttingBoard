var React = require('react');
var History = require('react-router').History;
var Modal= require('react-bootstrap').Modal;
var BoardForm = require('./board_form');

var BoardIndexItem = React.createClass({
	mixins: [History],

	getInitialState: function() {
		return { showModal: false};
	},

	renderBoard: function() {
		this.history.push("boards/" + this.props.board.id);
	},

	openEditBoardForm: function(e) {
		e.stopPropagation();
		e.preventDefault();
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
			<div className="col-md-3" onClick={this.renderBoard}>
				<section className="board">
				<h5>{this.props.board.title}</h5>
				<div className="pictures" >
	 				<div className="biggerPicture">Picture 1 </div>
						<div className="container-float smallPictures">
							<div className="smallPicture col-md-4">PIC1</div>
							<div className="smallPicture col-md-4">PIC2</div>
							<div className="smallPicture col-md-4">PIC3</div>
						</div>
						<button className="btn editButton" onClick={this.openEditBoardForm}>Edit</button>
						<Modal show={this.state.showModal} onHide={this.closeEditBoardForm}>
							<Modal.Header closeButton>
								<Modal.Title>Edit you board</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<BoardForm boardId={boardId} modalCallback={this.closeEditBoardForm}/>
							</Modal.Body>
						</Modal>
					</div>
			</section> 
			</div>

		)
	}
});

module.exports = BoardIndexItem;