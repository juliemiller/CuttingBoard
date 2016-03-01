var AppDispatcher = require('../dispatcher/dispatcher');
var RecipeConstants = require('../constants/recipe_constants');

var RecipeActions = {
	receiveSingleRecipe: function(recipe) {
		AppDispatcher.dispatch({
			actionType: RecipeConstants.RECIPE_RECEIVED,
			recipe: recipe
		});
	},

	receiveRecipes: function(recipes) {
		AppDispatcher.dispatch({
			actionType: RecipeConstants.RECIPES_RECEIVED,
			recipes: recipes
		});
	},

	receivePinnedRecipes: function(recipes) {
		AppDispatcher.dispatch({
			actionType: RecipeConstants.PINNED_RECIPES_RECEIVED,
			recipes: recipes
		});
	}

};

module.exports = RecipeActions;