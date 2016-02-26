var React = require('react');
var RecipeStore = require('../../stores/recipe_store');
var ApiUtil = require('../../util/api_util');
var RecipeIndexItem = require('./recipe_index_item');

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
				<div className="allRecipes">
					{
					this.state.recipes.map(function(recipe) {
						return <RecipeIndexItem key={recipe.id} recipe={recipe} />
					})
					}
				</div>
		)
	}
})

module.exports = RecipeIndex;

