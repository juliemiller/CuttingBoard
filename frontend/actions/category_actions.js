var AppDispatcher = require('../dispatcher/dispatcher');
var CategoryConstants = require('../constants/category_constants');

var CategoryActions = {

	receiveCategories: function(categories) {
		AppDispatcher.dispatch({
			actionType: CategoryConstants.CATEGORIES_RECEIVED,
			categories: categories
		});
	},

	receiveFollowedCategories: function(categories) {
		AppDispatcher.dispatch({
			actionType: CategoryConstants.FOLLOWED_CATEGORIES_RECEIVED,
			categories: categories
		});
	},

	receiveFollowedCategory: function(category) {
		AppDispatcher.dispatch({
			actionType: CategoryConstants.FOLLOWED_CATEGORY_RECEIVED,
			category: category
		});
	},

	removeFollowedCategory: function(category_id) {
		AppDispatcher.dispatch({
			actionType: CategoryConstants.REMOVE_FOLLOWED_CATEGORY,
			category_id: category_id
		});
	},

};

module.exports = CategoryActions;