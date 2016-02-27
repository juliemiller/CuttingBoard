var AppDispatcher = require('../dispatcher/dispatcher');
var PinConstants = require('../constants/pin_constants');

var PinActions = {
	receiveSinglePin: function(pin) {
		AppDispatcher.dispatch({
			actionType: PinConstants.BOARD_RECEIVED,
			pin: pin
		});
	},

	receivePins: function(pins) {
		AppDispatcher.dispatch({
			actionType: PinConstants.BOARDS_RECEIVED,
			pins: pins
		});
	},

	removePin: function(pinId) {
		AppDispatcher.dispatch({
			actionType: PinConstants.REMOVE_BOARD,
			id: pinId
		});
	}

};

module.exports = PinActions;