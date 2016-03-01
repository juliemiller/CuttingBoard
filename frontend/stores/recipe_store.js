var Store = require('flux/utils').Store;
var RecipeConstants = require('../constants/recipe_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var RecipeStore = new Store(AppDispatcher);

var _recipes = {};
var _pinnedRecipes = {};

RecipeStore.all = function() {
	var recipes = [];

	Object.keys(_recipes).forEach(function(recipeId) {
			recipes.push(_recipes[recipeId]);
	})
	return recipes;
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
		case RecipeConstants.PINNED_RECIPES_RECEIVED:
			RecipeStore.receivePinnedRecipes(payload.recipes);
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

RecipeStore.pinnedRecipes = function() {
	var recipes = [];
	Object.keys(_pinnedRecipes).forEach(function(recipeId) {
		recipes.push(_pinnedRecipes[recipeId])
	});
	return recipes;
}

RecipeStore.receivePinnedRecipes = function(recipes) {
	_pinnedRecipes = {};
	recipes.forEach(function(recipe) {
		_pinnedRecipes[recipe.id] = recipe;
	});
	RecipeStore.__emitChange();
};

module.exports = RecipeStore;
