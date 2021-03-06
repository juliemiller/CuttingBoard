var React = require('react');
var RecipeDetailNavbar = require('./recipe_detail_navbar');

var RecipeIndexItemDetail = React.createClass({
	render: function() {
		return (
			<div>
				<RecipeDetailNavbar recipe={this.props.recipe} current_user={this.props.current_user}/>
				<img className="image" src={this.props.recipe.image_url} />
				<div className="recipeDetail">
					<p>{this.props.recipe.description}</p>
					<a href={this.props.recipe.url} target="_blank" className="btn btn-primary">Read it</a>
				</div>

			</div>
		)
	}
});

module.exports = RecipeIndexItemDetail;