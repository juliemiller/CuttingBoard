var BoardActions = require('../actions/board_actions');
var CategoryActions = require('../actions/category_actions');
var UserActions = require('../actions/user_actions');
var RecipeActions = require('../actions/recipe_actions');
var PinActions = require('../actions/pin_actions');

var ApiUtil = {
	fetchBoards: function() {
		$.ajax( {
			url: 'api/boards',
			dataType: 'json',
			method: 'GET',
			success: function(boards) {
				BoardActions.receiveBoards(boards);
			}
		});
	},

	fetchSingleBoard: function(id) {
		$.ajax( {
				url: 'api/boards/' + id,
				dataType: 'json',
				method: 'GET',
				success: function(board) {
					BoardActions.receiveSingleBoard(board);
			}
		});
	},

	createBoard: function(board, successCallback, errorCallback) {
		$.ajax({
			url: 'api/boards',
			method: 'POST',
			data: {board: board},
			success: function(board) {
				BoardActions.receiveSingleBoard(board);
				successCallback(board.id);
			},
			error: function(errors) {
				console.log(errors);
				errorCallback(errors.responseText);
			}
		});
	},

	destroyBoard: function(id) {
		$.ajax( {
			url: 'api/boards/' + id,
			dataType: 'json',
			method: 'DELETE',
			success: function() {
				BoardActions.removeBoard(id)
			}
		})
	},

	editBoard: function(board, successCallback, errorCallback) {
		$.ajax( {
			url: 'api/boards/' + board.boardId,
			dataType: 'json',
			method: 'PATCH',
			data: {board: board},
			success: function(board) {
				successCallback();
				BoardActions.receiveSingleBoard(board);
			},
			error: function(errors) {
				errorCallback(errors.responseText);
			}
		})
	},

	fetchCategories: function() {
		$.ajax( {
			url: 'api/categories',
			dataType: 'json',
			method: 'GET',
			success: function(categories) {
				CategoryActions.receiveCategories(categories);
			}
		});
	},

	getCurrentUser: function() {
		$.ajax({
			url: '/users/show',
			method: "GET",
			dataType: 'text',
			success: function(user) {
				UserActions.receiveCurrentUser(user);
			},
			error: function(data) {
			}
		})
	},

	logoutUser: function(callback) {
		$.ajax({
			url: '/session',
			method: "DELETE",
			dataType: "json",
			success: function() {
				callback();
			}
		})
	},

	fetchRecipes: function() {
		$.ajax( {
			url: 'api/recipes/',
			dataType: 'json',
			method: 'GET',
			success: function(recipes) {
				RecipeActions.receiveRecipes(recipes)
			}
		});	
	},

	fetchFilteredRecipes: function(filter) {
		$.ajax( {
			url: 'api/filtered_recipes',
			dataType: 'json',
			method: 'GET',
			data: { filter: filter },
			success: function(recipes) {
				RecipeActions.receiveFilteredRecipes(recipes);
			}
		})
	},

	fetchSingleRecipe: function(id) {
		$.ajax( {
				url: 'api/recipes/' + id,
				dataType: 'json',
				method: 'GET',
				success: function(recipe) {
					RecipeActions.receiveSingleRecipe(recipe);
			}
		});
	},

	createPin: function(boardId, recipeId) {
		var pin = { board_id: boardId, recipe_id: recipeId};
		$.ajax( {
				url: 'api/pins/',
				dataType: 'json',
				method: 'POST',
				data: {pin: pin},
				success: function(pin) {
					PinActions.receiveSinglePin(pin);
				},
				error: function(data) {
					console.log(data);
				}
		});
	},

	destroyPin: function(id) {
		$.ajax( {
				url: 'api/pins/' + id,
				dataType: 'json',
				method: 'DELETE',
				success: function(pin) {
					PinActions.removePin(id);
			}
		});
	},

	getPinnedRecipes: function() {
		$.ajax( {
				url: 'api/pins/',
				dataType: 'json',
				method: 'GET',
				success: function(recipes) {
					RecipeActions.receivePinnedRecipes(recipes);
			}
		});
	},

	createCategoryFollows: function(categoryIds) {
		$.ajax( {
			url: 'api/followed_categories',
			dataType: 'json',
			method: 'POST',
			data: { followed_category: categoryIds },
			success: function(categories) {
				ApiUtil.fetchFollowedCategories();
				ApiUtil.fetchFilteredRecipes();
			}
		});
	},
		
		deleteCategoryFollows: function(categoryIds) {
			console.log(categoryIds);
		$.ajax( {
			url: 'api/followed_categories/delete',
			dataType: 'json',
			method: 'POST',
			data: { categoryIds: categoryIds },
			success: function() {
				ApiUtil.fetchFollowedCategories();
				ApiUtil.fetchFilteredRecipes();
			}
		});
	},

	fetchFollowedCategories: function() {
		$.ajax( {
			url: 'api/followed_categories',
			dataType: 'json',
			method: 'GET',
			success: function(categories) {
				CategoryActions.receiveFollowedCategories(categories);
			}
		})
	}

};

module.exports = ApiUtil;
