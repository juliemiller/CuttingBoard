var React = require('react');
var Modal = require('react-bootstrap').Modal;
var RecipeIndexItemDetail = require('./recipe_index_item_detail');

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
			<div className="container-fluid">
				<div onClick={this.openRecipeDetail} className="col-md-3 recipeIndexItem">
					<img className="image" src={this.props.recipe.image_url}/>
					<h4> {this.props.recipe.title}</h4>
					<div>{this.props.recipe.description}</div>
					<div>{this.props.recipe.category_id}</div>
				</div>
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