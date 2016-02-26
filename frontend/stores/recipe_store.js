var Store = require('flux/utils').Store;
var RecipeConstants = require('../constants/recipe_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var RecipeStore = new Store(AppDispatcher);

var _recipes = {};

RecipeStore.all = function() {
	var recipes = [];

	Object.keys(_recipes).forEach(function(recipeId) {
			recipes.push(_recipes[recipeId]);
	})
	return { recipes: recipes };
};

RecipeStore.find = function(id) {
	return _recipes[id];
};

RecipeStore.__onDispatch = function(payload) {
	switch (payload.actionType) {
		case RecipeConstants.RECIPES_RECEIVED:
			RecipeStore.receiveRecipes(payload.recipes);
			break;
		case RecipeConstants.RECIPE_RECEIVED:
			RecipeStore.receiveSingleRecipe(payload.recipe);
			break;	
	}
};

RecipeStore.receiveRecipes = function(recipes) {
	recipes.forEach(function(recipe) {
		_recipes[recipe.id] = recipe;
	})
	RecipeStore.__emitChange();

};

RecipeStore.receiveSingleRecipe = function(recipe) {
	_recipes[recipe.id] = recipe;
	RecipeStore.__emitChange();
};

module.exports = RecipeStore;
