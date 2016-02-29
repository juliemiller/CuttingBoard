var React = require('react');
var ApiUtil = require('../../util/api_util');
var CreatePin = require('../pin/create_pin');
var Modal = require('react-bootstrap').Modal;
var RecipeItem = require('../recipe/recipe_item');
var BoardList = require('../board/board_list');

var RecipeDetailNavbar = React.createClass({
	getInitialState: function() {
		return { showModal: false }
	},

	openCreatePinModal: function() {
		this.setState({ showModal: true });
	},

	closeCreatePinModal: function() {
		this.setState({ showModal: false });
	},

	render: function() {
		return (
			<div className="btn-toolbar recipeNavBar" >
				<button className="btn btn-primary" onClick={this.openCreatePinModal}>Pin</button>
				<Modal show={this.state.showModal} onHide={this.closeCreatePinModal}>
					<Modal.Header closeButton id="createPinModalHeader">
					</Modal.Header>
					<Modal.Body id="createPinModalBody">
						<div className="cretePinModalBody">
							<CreatePin recipe={this.props.recipe} modalCallback={this.closeCreatePinModal} />
						</div>
					</Modal.Body>
				</Modal>
			</div>
		)
	}
});

module.exports = RecipeDetailNavbar;
