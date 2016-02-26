var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');

var UserActions = {
	receiveCurrentUser: function(user) {
		AppDispatcher.dispatch({
			actionType: UserConstants.USER_RECEIVED,
			user: user
		});
	}

};

module.exports = UserActions;