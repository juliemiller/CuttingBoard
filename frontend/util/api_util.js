var BoardActions = require('../actions/board_actions');
var CategoryActions = require('../actions/category_actions');

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

	createBoard: function(board) {
		$.ajax({
			url: 'api/boards',
			method: 'POST',
			data: {board: board},
			success: function(board) {
				BoardActions.receiveSingleBoard(board);
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
			url: 'api/boards/' + board.id,
			dataType: 'json',
			method: 'PATCH',
			data: {board: board},
			success: function(board) {
				BoardActions.receiveSingleBoard(board);
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
	}

};

module.exports = ApiUtil;
window.ApiUtil = ApiUtil;