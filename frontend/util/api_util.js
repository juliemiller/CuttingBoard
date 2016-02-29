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

	createBoard: function(board, callback) {
		$.ajax({
			url: 'api/boards',
			method: 'POST',
			data: {board: board},
			success: function(board) {
				BoardActions.receiveSingleBoard(board);
				callback && callback(board.id);
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

	editBoard: function(board) {
		$.ajax( {
			url: 'api/boards/' + board.boardId,
			dataType: 'json',
			method: 'PATCH',
			data: {board: board},
			success: function(board) {
				BoardActions.receiveSingleBoard(board);
			}
			// error: function(errors) {
			// 	// BoardActions.receiveErrors(errors);
			// 	console.log(errors);
			// }
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

	logoutUser: function() {
		$.ajax({
			url: '/session',
			method: "DELETE",
			dataType: "json",
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
					console.log(pin);
					PinActions.receiveSinglePin(pin);
			},
			error: function(pin) {
				console.log("ERROR", pin)	
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
				success: function(pins) {
					PinActions.receivePins(pins);
			}
		});
	}

};

module.exports = ApiUtil;
