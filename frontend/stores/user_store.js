var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var UserStore = new Store(AppDispatcher);

var _current_user = {};

UserStore.__onDispatch = function(payload) {
	switch(payload.actionType) {
		case (UserConstants.USER_RECEIVED):
			_current_user = JSON.parse(payload.user);
			UserStore.__emitChange();
			break;
	}
};

UserStore.getUser = function() {
	var user = _current_user;
	return user;
};

module.exports = UserStore;
