var AppDispatcher = require('../dispatcher/dispatcher');
var RecipeConstants = require('../constants/recipe_constants');

var RecipeActions = {
	receiveSingleBoard: function(recipe) {
		AppDispatcher.dispatch({
			actionType: RecipeConstants.RECIPE_RECEIVED,
			recipe: recipe
		});
	},

	receiveBoards: function(recipes) {
		AppDispatcher.dispatch({
			actionType: RecipeConstants.RECIPES_RECEIVED,
			recipes: recipes
		});
	}

};

module.exports = RecipeActions;