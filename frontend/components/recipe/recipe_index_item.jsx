var React = require('react');
var Modal = require('react-bootstrap').Modal;
var RecipeIndexItemDetail = require('./recipe_index_item_detail');
var RecipeItem = require('./recipe_item');

var RecipeIndexItem = React.createClass({
	getInitialState: function() {
		return { showModal: false };
	},

	openRecipeDetail: function() {
		this.setState({ showModal: true });
	},

	closeRecipeDetail: function() {
		this.setState({ showModal: false });
	},

	render: function() {
		return (
			<div className="container-fluid" onClick={this.openRecipeDetail} >
				<RecipeItem recipe={this.props.recipe} />
				<Modal show={this.state.showModal} onHide={this.closeRecipeDetail} >
					<Modal.Header closeButton>
						<Modal.Title>{this.props.recipe.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<RecipeIndexItemDetail recipe={this.props.recipe} />
					</Modal.Body>
				</Modal>
			</div>
		)
	}
});

module.exports =  RecipeIndexItem;