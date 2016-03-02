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
		case CategoryConstants.REMOVE_FOLLOWED_CATEGORIES:
			CategoryStore.removeFollowedCategories(payload.categoryIds);
			break;
		case CategoryConstants.NEW_FOLLOWED_CATEGORIES_RECEIVED:
			CategoryStore.addFollowedCategories(payload.categories);
			break;
	}
};

CategoryStore.receiveCategories = function(categories) {
	_categories = categories;
	CategoryStore.__emitChange();
};

CategoryStore.addFollowedCategories = function(categories) {
	_followedCategories = _followedCategories.concat(categories);

	CategoryStore.__emitChange();
};

CategoryStore.removeFollowedCategories = function(categoryIds) {
	var category_index = [];
	
	categoryIds.forEach(function(categoryId) {
		_followedCategories.forEach(function(category, idx) {
			if (category.id === parseInt(categoryId)) {
				category_index.push(idx);
			}
		})
	})

	for (var i = category_index.length; i >= 0; i --) {
		var idx = category_index[i];
		_followedCategories.splice(idx, 1);
	}

	CategoryStore.__emitChange();
};

CategoryStore.receiveFollowedCategories = function(categories) {
	_followedCategories = categories;
	CategoryStore.__emitChange();
};

module.exports = CategoryStore;