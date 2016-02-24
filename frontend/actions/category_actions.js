var AppDispatcher = require('../dispatcher/dispatcher');
var CategoryConstants = require('../constants/category_constants');

var CategoryActions = {

	receiveCategories: function(categories) {
		AppDispatcher.dispatch({
			actionType: CategoryConstants.CATEGORIES_RECEIVED,
			categories: categories
		});
	},

};

module.exports = CategoryActions;