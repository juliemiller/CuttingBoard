var React = require('react');
var RecipeStore = require('../../stores/recipe_store');
var ApiUtil = require('../../util/api_util');
var RecipeIndexItem = require('../recipe/recipe_index_item');
var Masonry = require('react-masonry-component');

var PinIndex = React.createClass({
	getInitialState: function() {
		return { pins: RecipeStore.pinnedRecipes() };
	},

	componentDidMount: function() {
		this.recipeListener = RecipeStore.addListener(this._onChange);
		ApiUtil.getPinnedRecipes();
	},

	_onChange: function() {
		this.setState({ pins: RecipeStore.pinnedRecipes() });
	},

	componentWillUnmount: function() {
		this.recipeListener.remove();
	},
	
	render: function() {
		return (
			<Masonry >
				{
					this.state.pins.map(function(recipe) {
						return <RecipeIndexItem recipe={recipe} key={recipe.id}/>
					})
				}
			</Masonry>
		)
	}
});

module.exports = PinIndex;