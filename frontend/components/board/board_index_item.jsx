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
		var pictureUrls = [];
		if (this.props.board) {
			boardId = this.props.board.id;
			for (var i = 0; i < this.props.board.recipes.length; i ++) {
				pictureUrls[i] = {backgroundImage: 'url(' + this.props.board.recipes[i].image_url + ')'};
			}
		}

		return (
			<div className="col-md-3 col-xs-4" onClick={this.renderBoard}>
				<section className="board">
				<h4>{this.props.board.title}</h4>
				<div className="pictures" >
	 				<div className="biggerPicture" style={pictureUrls[0]}> 
	 				</div>
						<div className="container-float smallPictures">
							<div className="smallPicture col-md-4" style={pictureUrls[1]}>
							</div>
							<div className="smallPicture col-md-4" style={pictureUrls[2]}>
							</div>
							<div className="smallPicture col-md-4" style={pictureUrls[3]}>
							</div>
						</div>
						<button className="btn editButton" onClick={this.openEditBoardForm}>Edit</button>
						<Modal show={this.state.showModal} onHide={this.closeEditBoardForm}>
							<Modal.Header closeButton>
								<Modal.Title>Edit your board</Modal.Title>
							</Modal.Header>
							<Modal.Body className="container-fluid">
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

