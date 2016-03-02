var React = require('react');
var RecipeStore = require('../../stores/recipe_store');
var ApiUtil = require('../../util/api_util');
var RecipeIndexItem = require('./recipe_index_item');

var Masonry = require('react-masonry-component');
var InfiniteScroll = require('react-infinite-scroll')(React);
var RecipeIndex = React.createClass({

	getInitialState: function() {
		return { recipes: RecipeStore.homeRecipes(), shownRecipes: RecipeStore.homeRecipes().slice(0,10) };
	},

	componentDidMount: function() {
		this.recipeListener = RecipeStore.addListener(this._onChange);
	},

	componentWillUnmount: function() {
		this.recipeListener.remove();
	},

	_onChange: function() {
		this.setState({ recipes: RecipeStore.homeRecipes(), shownRecipes: RecipeStore.homeRecipes().slice(0,10) });
	},

	loadFunc: function(pageNum) {
		console.log("LOAD FUNCTION: RECIPES", this.state.recipes);
		console.log("LOAD FUNCTION: SHOWNRECIPES", this.state.shownRecipes);
		console.log("PAGENUM:", pageNum);
		var allRecipes = RecipeStore.homeRecipes();
		// this.setState( { shownRecipes: allRecipes.slice(0, 10 * (pageNum + 1)) });
	},

	hasMore: function() {
		// (this.state.recipes.length > this.state.shownRecipes.length);
		true;
	},

	render: function() {

		return (
				<Masonry className="allRecipes" elementType={'div'} >
						{
						this.state.shownRecipes.map(function(recipe) {
							return <RecipeIndexItem key={recipe.id} recipe={recipe} />
						})
						}
				</Masonry>
		)
	}
})

module.exports = RecipeIndex;


			// <InfiniteScroll pageStart={0} loadMore={this.loadFunc} hasMore={this.hasMore}>
			// </InfiniteScroll>	