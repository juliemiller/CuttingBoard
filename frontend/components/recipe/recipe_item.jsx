var React = require('react');

var RecipeItem = React.createClass( {
	render: function() {
		return (
			<div className="recipeIndexItem">
				<img className="image" src={this.props.recipe.image_url}/>
				<h4 className="recipeTitle"> {this.props.recipe.title}</h4>
				<div className="recipeDescription">{this.props.recipe.description}</div>
				<div className="recipeCategory">
					<div className="recipeCategoryImage">
						<img src={this.props.recipe.category.image_url} />
					</div>
				{this.props.recipe.category.name}
				</div>
			</div>
		)
	}
});

module.exports = RecipeItem;