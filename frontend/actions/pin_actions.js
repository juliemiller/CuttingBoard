var AppDispatcher = require('../dispatcher/dispatcher');
var PinConstants = require('../constants/pin_constants');

var PinActions = {
	receiveSinglePin: function(pin) {
		AppDispatcher.dispatch({
			actionType: PinConstants.PIN_RECEIVED,
			pin: pin
		});
	},

	receivePins: function(pins) {
		AppDispatcher.dispatch({
			actionType: PinConstants.PINS_RECEIVED,
			pins: pins
		});
	},

	removePin: function(pinId) {
		AppDispatcher.dispatch({
			actionType: PinConstants.REMOVE_PIN,
			id: pinId
		});
	}

};

module.exports = PinActions;