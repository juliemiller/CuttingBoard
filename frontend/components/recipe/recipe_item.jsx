var React = require('react');

var RecipeItem = React.createClass( {
	render: function() {
		return (
			<div className="col-md-3 recipeIndexItem">
				<img className="image" src={this.props.recipe.image_url}/>
				<h4> {this.props.recipe.title}</h4>
				<div>{this.props.recipe.description}</div>
				<div className="recipeCategory">{this.props.recipe.category.name}</div>
			</div>
		)
	}
});

module.exports = RecipeItem;