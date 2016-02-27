var React = require('react');
var RecipeDetailNavbar = require('./recipe_detail_navbar');

var RecipeIndexItemDetail = React.createClass({
	render: function() {
		return (
			<div>
				<RecipeDetailNavbar recipe={this.props.recipe}/>
				<img className="image" src={this.props.recipe.image_url} />
				<div>
					<p>{this.props.recipe.description}</p>
					<a href={this.props.recipe.url} target="_blank" className="btn">Read it</a>
				</div>

			</div>
		)
	}
});

module.exports = RecipeIndexItemDetail;