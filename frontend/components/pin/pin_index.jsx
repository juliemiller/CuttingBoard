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
		var noPinMessage;
		if (this.state.pins.length === 0) {
			noPinMessage = <p className="noPinMessage">You don't have any pins yet! Check out the home page to pin some recipes to your boards.</p>
		}
		return (
			<div>
				{noPinMessage}
			<Masonry >
				{
					this.state.pins.map(function(recipe) {
						return <RecipeIndexItem recipe={recipe} key={recipe.id}/>
					})
				}
			</Masonry>
		</div>
		)
	}
});

module.exports = PinIndex;