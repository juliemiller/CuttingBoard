var AppDispatcher = require('../dispatcher/dispatcher');
var BoardConstants = require('../constants/board_constants');

var BoardActions = {
	receiveSingleBoard: function(board) {
		AppDispatcher.dispatch({
			actionType: BoardConstants.BOARD_RECEIVED,
			board: board
		});
	},

	receiveBoards: function(boards) {
		AppDispatcher.dispatch({
			actionType: BoardConstants.BOARDS_RECEIVED,
			boards: boards
		});
	},

	removeBoard: function(boardId) {
		AppDispatcher.dispatch({
			actionType: BoardConstants.REMOVE_BOARD,
			id: boardId
		});
	}

};

module.exports = BoardActions;