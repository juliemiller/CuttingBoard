var React = require('react');
var RecipeStore = require('../../stores/recipe_store');
var ApiUtil = require('../../util/api_util');
var RecipeIndexItem = require('./recipe_index_item');

var Masonry = require('react-masonry-component');

var RecipeIndex = React.createClass({

	getInitialState: function() {
		return { recipes: RecipeStore.all() };
	},

	componentDidMount: function() {
		this.recipeListener = RecipeStore.addListener(this._onChange);
		ApiUtil.fetchRecipes();
	},

	componentWillUnmount: function() {
		this.recipeListener.remove();
	},

	_onChange: function() {
		this.setState({ recipes: RecipeStore.all() });
	},

	render: function() {

		return (
			<Masonry className="allRecipes">
					{
					this.state.recipes.map(function(recipe) {
						return <RecipeIndexItem key={recipe.id} recipe={recipe} />
					})
					}
				</Masonry>
		)
	}
})

module.exports = RecipeIndex;

// <div className="allRecipes container-fluid">
// 					<div className="masonry-container">
// 					{
// 					this.state.recipes.map(function(recipe) {
// 						return <RecipeIndexItem key={recipe.id} recipe={recipe} />
// 					})
// 					}
// 					</div>
// 				</div>