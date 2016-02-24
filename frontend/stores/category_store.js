var Store = require('flux/utils').Store;
var CategoryConstants = require('../constants/category_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var CategoryStore = new Store(AppDispatcher);

var _categories = [];

CategoryStore.all = function() {
	return _categories.slice(0);
};

CategoryStore.__onDispatch = function(payload) {
	switch (payload.actionType) {
		case CategoryConstants.CATEGORIES_RECEIVED:
			CategoryStore.receiveCategories(payload.categories);
			break;
	}
};

CategoryStore.receiveCategories = function(categories) {
	_categories = categories;
	CategoryStore.__emitChange();
};


module.exports = CategoryStore;