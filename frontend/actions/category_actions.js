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

	receiveNewFollowedCategories: function(categories) {
		AppDispatcher.dispatch({
			actionType: CategoryConstants.NEW_FOLLOWED_CATEGORIES_RECEIVED,
			categories: categories
		});
	},

	removeCategoryFollows: function(categoryIds) {
		AppDispatcher.dispatch({
			actionType: CategoryConstants.REMOVE_FOLLOWED_CATEGORIES,
			categoryIds: categoryIds
		});
	},

};

module.exports = CategoryActions;