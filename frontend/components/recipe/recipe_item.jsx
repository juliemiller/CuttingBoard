var React = require('react');

var RecipeItem = React.createClass( {

	render: function() {
		var pic_url= {backgroundImage: 'url(' + this.props.recipe.category.image_url + ')'};
		return (
			<div className="recipeIndexItem">
				<img className="image" src={this.props.recipe.image_url}/>
				<h4 className="recipeTitle"> {this.props.recipe.title}</h4>
				<div className="recipeDescription">{this.props.recipe.description}</div>
				<div className="recipeCategory">
					<div className="recipeCategoryImage" style={pic_url}>
					</div>
					{this.props.recipe.category.name}
				</div>
			</div>
		)
	}
});

module.exports = RecipeItem;