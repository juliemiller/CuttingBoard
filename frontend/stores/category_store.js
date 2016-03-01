var Store = require('flux/utils').Store;
var CategoryConstants = require('../constants/category_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var CategoryStore = new Store(AppDispatcher);

var _categories = [];
var _followedCategories = [];

CategoryStore.all = function() {
	return _categories.slice(0);
};

CategoryStore.followedCategories = function() {
	return _followedCategories.slice(0)
},

CategoryStore.__onDispatch = function(payload) {
	switch (payload.actionType) {
		case CategoryConstants.CATEGORIES_RECEIVED:
			CategoryStore.receiveCategories(payload.categories);
			break;
		case CategoryConstants.FOLLOWED_CATEGORIES_RECEIVED:
			CategoryStore.receiveFollowedCategories(payload.categories);
			break;
		case CategoryConstants.REMOVE_FOLLOWED_CATEGORY:
			CategoryStore.removeFollowedCategory(payload.category_id);
			break;
		case CategoryConstants.FOLLOWED_CATEGORY_RECEIVED:
			CategoryStore.addFollowedCategory(payload.category);
			break;
	}
};

CategoryStore.receiveCategories = function(categories) {
	_categories = categories;
	CategoryStore.__emitChange();
};

CategoryStore.addFollowedCategory = function(category) {
	_followedCategories.concat(category);
	CategoryStore.__emitChange();
};

CategoryStore.removeFollowedCategory = function(category_id) {
	var category_index;
	_followedCategories.forEach(function(category, idx) {
		if (category.id === category_id) {
			var category_index = idx;
		}
	})
	_followedCategories.splice(category_index, 1);
	CategoryStore.__emitChange();
};

CategoryStore.receiveFollowedCategories = function(categories) {
	_followedCategories = categories;
	CategoryStore.__emitChange();
};

module.exports = CategoryStore;